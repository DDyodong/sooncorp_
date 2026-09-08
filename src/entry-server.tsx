import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import AppRouter from './router'
import { pages, siteUrl, type Locale } from './site'

export function renderPage(locale: Locale) {
  const page = pages[locale]
  const url = siteUrl + page.path
  const organization = {
    '@context': 'https://schema.org', '@type': 'Organization',
    '@id': siteUrl + '/#organization',
    name: '순코퍼레이션', alternateName: 'SOON Corporation',
    url: siteUrl + '/', logo: siteUrl + '/img/sooncorplogo.png',
    email: 'soonsales@sooncorp.kr',
  }
  const head = renderToStaticMarkup(
    <>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="ko" href={siteUrl + pages.ko.path} />
      <link rel="alternate" hrefLang="en" href={siteUrl + pages.en.path} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl + pages.ko.path} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SOON Corporation" />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale === 'ko' ? 'ko_KR' : 'en_US'} />
      <meta property="og:image" content={siteUrl + '/img/background.jpg'} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }} />
    </>,
  )
  return { head, html: renderToString(<AppRouter locale={locale} />), path: page.path }
}
