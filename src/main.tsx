import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Kor from './Kr.tsx'
import './index.css'
import { DoorClosed } from 'lucide-react'

const userLang = navigator.language || navigator.languages[0]
console.log('감지된 언어:', userLang) // ✅ 추가 //콘솔에서 감지된 언어 확인용
const isKor = userLang.startsWith('ko') // 한국어 페이지인지 아닌지 true false 

document.title = isKor ? '순코퍼레이션' : 'SOONCORPORATION' /*언어 감지 후 사이트 제목을 정함*/

/*여기는 한국어 페이지로 갈 것인가 영어 페이지로 갈 것인가 정함*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isKor ? <App /> : <App />}
  </StrictMode>
)

