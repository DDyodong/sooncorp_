import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { runInNewContext } from 'node:vm'

const ko = readFileSync('dist/index.html', 'utf8')
const en = readFileSync('dist/en/index.html', 'utf8')
const handler = runInNewContext(readFileSync('infra/cloudfront-language-routing.js', 'utf8') + '\nhandler')
const request = (uri, querystring = {}) => ({ request: { uri, method: 'GET', querystring, headers: {} } })

test('both built pages contain localized content and reciprocal SEO links before JavaScript runs', () => {
  for (const [html, lang, canonical, company] of [
    [ko, 'ko', 'https://sooncorp.kr/', '순코퍼레이션'],
    [en, 'en', 'https://sooncorp.kr/en/', 'SOON Corporation'],
  ]) {
    assert.ok(html.includes(`<html lang="${lang}">`))
    assert.match(html, /<title>[^<]+<\/title>/)
    assert.match(html, /<meta name="description" content="[^"]+"/)
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`))
    assert.match(html, /hrefLang="ko" href="https:\/\/sooncorp.kr\/"/i)
    assert.match(html, /hrefLang="en" href="https:\/\/sooncorp.kr\/en\/"/i)
    const body = html.split('<body>')[1]
    assert.ok(body.includes(company))
    assert.match(body, /<h1[^>]*>[^<]+/)
    assert.doesNotMatch(body, /opacity:0(?:[;"}])|<!--app-html-->|순코프레이션/)
    assert.equal((body.match(/<details\b/g) || []).length, 4)
    assert.ok(body.includes('soonsales@sooncorp.kr'))
    for (const match of html.matchAll(/(?:src|href)="(\/(?:assets|img)\/[^"#]+)"/g)) {
      assert.ok(existsSync('dist' + match[1]), `Missing asset ${match[1]}`)
    }
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])
    assert.equal(schema.name, '순코퍼레이션')
    assert.equal(schema.alternateName, 'SOON Corporation')
  }
  assert.match(ko, /href="\/en\/" hrefLang="en"/)
  assert.match(en, /href="\/" hrefLang="ko"/)
})

test('sitemap contains exactly the two canonical pages', () => {
  const sitemap = readFileSync('dist/sitemap.xml', 'utf8')
  assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]), [
    'https://sooncorp.kr/', 'https://sooncorp.kr/en/',
  ])
  assert.match(readFileSync('dist/robots.txt', 'utf8'), /Sitemap: https:\/\/sooncorp.kr\/sitemap.xml/)
})

test('CloudFront serves language HTML, permanently redirects old URLs and preserves assets', () => {
  assert.equal(handler(request('/')).uri, '/index.html')
  assert.equal(handler(request('/en/')).uri, '/en/index.html')
  for (const [uri, location] of [['/kr', '/'], ['/kr/', '/'], ['/App', '/en/'], ['/App/', '/en/'], ['/en', '/en/'], ['/index.html', '/'], ['/en/index.html', '/en/']]) {
    const response = handler(request(uri))
    assert.equal(response.statusCode, 301)
    assert.equal(response.headers.location.value, location)
  }
  const repeated = handler(request('/kr', { q: { value: 'one%20two', multiValue: [{ value: 'one%20two' }, { value: 'three' }] } }))
  assert.equal(repeated.headers.location.value, '/?q=one%20two&q=three')
  for (const uri of ['/assets/missing.js', '/img/sooncorplogo.png', '/sitemap.xml', '/robots.txt']) {
    assert.equal(handler(request(uri)).uri, uri)
  }
  assert.equal(handler(request('/does-not-exist')).statusCode, 404)
  assert.equal(handler(request('/en/missing/')).statusCode, 404)
})
