import App from './App'
import Kor from './Kr'
import type { Locale } from './site'

export default function AppRouter({ locale }: { locale: Locale | null }) {
  if (locale === 'ko') return <Kor />
  if (locale === 'en') return <App />
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold">페이지를 찾을 수 없습니다 · Page not found</h1>
      <p className="mt-6"><a href="/">한국어 홈</a> · <a href="/en/">English home</a></p>
    </main>
  )
}
