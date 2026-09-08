import { build, createServer } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

await build()
// Transform the existing TSX at build time. No rendering server is deployed.
const server = await createServer({
  server: { middlewareMode: true, watch: { ignored: ['**/dist/**'] } },
  optimizeDeps: { disabled: true },
  appType: 'custom',
})
try {
  const { renderPage } = await server.ssrLoadModule('/src/entry-server.tsx')
  const template = await readFile('dist/index.html', 'utf8')
  if (!template.includes('<!--seo-head-->') || !template.includes('<!--app-html-->')) {
    throw new Error('Missing prerender template markers')
  }
  for (const locale of ['ko', 'en']) {
    const page = renderPage(locale)
    const directory = locale === 'ko' ? 'dist' : 'dist/en'
    await mkdir(directory, { recursive: true })
    const html = template
      .replace('<html lang="ko">', `<html lang="${locale}">`)
      .replace('<!--seo-head-->', () => page.head)
      .replace('<div id="root">', '<div id="root" data-prerendered="true">')
      .replace('<!--app-html-->', () => page.html)
    await writeFile(`${directory}/index.html`, html)
    console.log(`Prerendered ${page.path}`)
  }
  await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n\nSitemap: https://sooncorp.kr/sitemap.xml\n')
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['https://sooncorp.kr/', 'https://sooncorp.kr/en/'].map(url => `  <url>
    <loc>${url}</loc>
    <xhtml:link rel="alternate" hreflang="ko" href="https://sooncorp.kr/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://sooncorp.kr/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://sooncorp.kr/"/>
  </url>`).join('\n')}
</urlset>\n`)
} finally {
  await server.close()
}
