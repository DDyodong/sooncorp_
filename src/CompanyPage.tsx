import { useState } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import ko from './content/ko.json'
import en from './content/en.json'
import type { Locale } from './site'
import { officeCenter as center, officeMapLink as mapLink } from './office'
import './company-page.css'

const productLabels = ['FITTINGS', 'FLANGES', 'VALVES', 'FORGINGS', 'PIPES', 'SPECIALTY ITEMS']
const teamLabels = ['PURCHASING', 'SALES', 'LOGISTICS', 'QA & QC']
const number = (index: number) => String(index + 1).padStart(2, '0')

function DataTable({ data }: { data: { headers: string[]; rows: string[][] } }) {
  return <div className="sc-tablewrap"><table>
    <thead><tr>{data.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead>
    <tbody>{data.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
  </table></div>
}

function OfficeMap({ locale }: { locale: Locale }) {
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '' })
  if (loadError) return <p><a href={mapLink} target="_blank" rel="noopener noreferrer">{locale === 'ko' ? 'Google 지도에서 위치 보기 ↗' : 'View location on Google Maps ↗'}</a></p>
  if (!isLoaded) return <p role="status">{locale === 'ko' ? '지도를 불러오는 중입니다.' : 'Loading map…'}</p>
  return <GoogleMap mapContainerStyle={{ width: '100%', height: '360px' }} center={center} zoom={18}><Marker position={center} /></GoogleMap>
}

export default function CompanyPage({ locale }: { locale: Locale }) {
  const copy = locale === 'ko' ? ko : en
  const korean = locale === 'ko'
  const [showMap, setShowMap] = useState(false)
  const inquiry = korean ? '문의하기' : 'Contact us'

  return <div id="soon-clean" lang={locale}>
    <a className="sc-skip" href="#about">{korean ? '본문으로 이동' : 'Skip to content'}</a>
    <main>
      <section className="sc-hero">
        <img src="/img/site-hero.jpg" alt={korean ? '가지런히 적재된 산업용 파이프' : 'Industrial pipes stacked in rows'} width="1600" height="1067" />
        <header className="sc-nav">
          <a className="sc-brand" href={korean ? '/' : '/en/'} aria-label={copy.contact.company}>SOON<small>CORPORATION</small></a>
          <nav className="sc-navlinks" aria-label={korean ? '주요 메뉴' : 'Main navigation'}>
            <a href="#about">{korean ? '회사소개' : 'About'}</a>
            <a href="#products">{korean ? '제품' : 'Products'}</a>
            <a href="#experience" className="sc-secondary-nav">{korean ? '납품 실적' : 'Experience'}</a>
            <a href="#after-sales" className="sc-secondary-nav">{korean ? '서비스' : 'Service'}</a>
            <a className="sc-language" href={korean ? '/en/' : '/'} hrefLang={korean ? 'en' : 'ko'} lang={korean ? 'en' : 'ko'}>{korean ? 'English' : '한국어'}</a>
            <a href="#contact" className="sc-nav-contact">{inquiry} ↗</a>
          </nav>
        </header>
        <div className="sc-hero-copy">
          <span className="sc-kicker">PIPING COMPONENTS · GLOBAL SUPPLY</span>
          <h1>{korean ? <>순코퍼레이션에<br />오신 것을 환영합니다</> : <>Welcome to<br />SOON Corporation</>}</h1>
          <p>{copy.hero.description}</p>
          <a className="sc-link" href="#contact">{inquiry}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="sc-hero-bottom"><span>SOON CORPORATION · BUSAN, KOREA</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section id="about" className="sc-section"><div className="sc-wrap sc-about">
        <div><span className="sc-kicker">ABOUT SOON</span><h2>{copy.about.title}</h2><div className="sc-year">2020<small>ESTABLISHED IN BUSAN</small></div></div>
        <div className="sc-about-body">{copy.about.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
      </div></section>

      <section id="products" className="sc-section sc-products"><div className="sc-wrap">
        <div className="sc-topline"><div><span className="sc-kicker">STOCK PROGRAM</span><h2>{copy.products.title}</h2></div><p>{copy.products.items.map(item => item.title).join(' · ')}</p></div>
        <div className="sc-productgrid">{copy.products.items.map((item, i) => <article className="sc-product" key={item.title}>
          <div className="sc-product-image" role="img" aria-label={`${item.title} — ${korean ? 'AI 생성 예시 이미지' : 'AI-generated illustration'}`} />
          <div className="sc-product-title"><h3>{item.title}</h3><span>{number(i)} / {productLabels[i]}</span></div>
          <p>{item.description}</p>
        </article>)}</div>
        <p className="sc-caption">{korean ? '제품 이미지는 AI로 생성한 예시이며 실제 납품 제품과 다를 수 있습니다.' : 'Product images are AI-generated illustrations and may differ from supplied products.'}</p>
      </div></section>

      <section id="organization" className="sc-section"><div className="sc-wrap">
        <div className="sc-topline"><div><span className="sc-kicker">OUR ORGANIZATION</span><h2>{copy.organization.title}</h2></div></div>
        <div className="sc-orggrid">{copy.organization.items.map((item, i) => <article key={item.title}><span className="sc-num">{number(i)} / {teamLabels[i]}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </div></section>

      <section id="experience" className="sc-section sc-experience"><div className="sc-wrap">
        <div className="sc-topline"><div><span className="sc-kicker">EXPERIENCE LIST</span><h2>{copy.experience.title}</h2></div><ul className="sc-bullets">{copy.experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div>
        <DataTable data={copy.experience.table} />
      </div></section>

      <section id="after-sales" className="sc-section"><div className="sc-wrap">
        <div className="sc-service-top"><div><span className="sc-kicker">AFTER SALES SERVICE</span><h2>{copy.service.title}</h2></div><ul className="sc-promises">{copy.service.promises.map(p => <li key={p}>{p}</li>)}</ul></div>
        <div className="sc-service-tables">{copy.service.tables.map(table => <div key={table.title}><h3>{table.title}</h3><DataTable data={table} /></div>)}</div>
        <h3 className="sc-flow-title">{copy.service.flowTitle}</h3>
        <ol className="sc-flow">{copy.service.steps.map((step, i) => <li key={step.title}><span className="sc-num">{number(i)}</span><b>{step.title}</b><p>{step.description}</p></li>)}</ol>
      </div></section>

      <section id="suppliers" className="sc-section sc-suppliers"><div className="sc-wrap sc-supplier-layout">
        <div><span className="sc-kicker">OUR SUPPLIERS</span><h2>{copy.suppliers.title}</h2></div>
        <div>{copy.suppliers.groups.map((group, i) => <details key={group.title} open={i === 0}><summary>{group.title}</summary><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></details>)}</div>
      </div></section>

      <section id="contact" className="sc-contact"><div className="sc-wrap sc-contact-grid">
        <div><span className="sc-kicker">CONTACT US</span><h2>{korean ? <>순코퍼레이션과<br />함께하세요.</> : <>Work with<br />SOON Corporation.</>}</h2></div>
        <div><a className="sc-email" href="mailto:soonsales@sooncorp.kr">soonsales@sooncorp.kr ↗</a><p>{korean ? '전화' : 'Phone'} <a href="tel:+821087706145">+82-10-8770-6145</a> &nbsp; / &nbsp; {korean ? '팩스' : 'Fax'} +82-51-868-7280<br />{korean ? '이메일' : 'Email'} <a href="mailto:ksy8634@naver.com">ksy8634@naver.com</a></p></div>
      </div></section>
    </main>

    <footer className="sc-footer"><div className="sc-wrap">
      <div className="sc-footer-top"><div className="sc-brand">SOON<small>CORPORATION</small></div><div>
        <p>{copy.contact.company}<br />{copy.contact.address}<br />{copy.business}</p>
        {import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? <button className="sc-map-button" aria-expanded={showMap} aria-controls="office-map" onClick={() => setShowMap(!showMap)}>{showMap ? (korean ? '지도 닫기 −' : 'Hide map −') : (korean ? '지도 보기 +' : 'View map +')}</button> : <a className="sc-map-button" href={mapLink} target="_blank" rel="noopener noreferrer">{korean ? '지도 보기 ↗' : 'View map ↗'}</a>}
      </div></div>
      <div id="office-map" className={showMap ? 'sc-map-panel' : undefined} hidden={!showMap}>{showMap && <OfficeMap locale={locale} />}</div>
      <div className="sc-footer-bottom"><span>© SOON Corporation. All rights reserved.</span><span>Images by <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a> · Product concepts by AI</span></div>
    </div></footer>
  </div>
}
