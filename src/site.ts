export type Locale = 'ko' | 'en'

export const siteUrl = 'https://sooncorp.kr'
export const pages = {
  ko: {
    path: '/',
    title: '순코퍼레이션 | 배관 자재 제조·수출',
    description: '순코퍼레이션(SOON Corporation)은 부산에 위치한 배관 자재 제조·수출 기업입니다. 피팅, 플랜지, 밸브, 파이프 등 제품과 공급 실적, 사후 서비스를 소개합니다.',
  },
  en: {
    path: '/en/',
    title: 'SOON Corporation | Piping Components Manufacturer & Exporter',
    description: 'SOON Corporation is a piping components manufacturer and exporter based in Busan, South Korea. Explore our fittings, flanges, valves, pipes, project experience and after-sales service.',
  },
} satisfies Record<Locale, { path: string; title: string; description: string }>

export function localeForPath(path: string): Locale | null {
  if (path === '/' || path === '/index.html') return 'ko'
  if (path === '/en/' || path === '/en/index.html') return 'en'
  return null
}

export function redirectForPath(path: string): string | null {
  if (path === '/kr' || path === '/kr/' || path === '/index.html') return '/'
  if (path === '/App' || path === '/App/' || path === '/en' || path === '/en/index.html') return '/en/'
  return null
}
