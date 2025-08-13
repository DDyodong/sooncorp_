type Bullet = string
type Project = {
  year: string
  name: string
  purchaser: string
  location: string
  item: string
  material: string
}

const bullets: Bullet[] = [
  "2020년부터 배관 자재 제조 및 소싱 프로젝트 수행",
  "글로벌 공급 실적과 고품질 제품 제공",
  "온쇼어·오프쇼어·플랜트·건설 프로젝트 규격 준수",
  "고객 만족과 지속적인 품질 개선에 대한 약속",
]

const projects: Project[] = [
  { year: "2023", name: "배관 밸브 현대화 리바핑", purchaser: "국내 EPC", location: "대한민국 / 현대중공업 외", item: "피팅, 파이프", material: "탄소강 / 합금강 / 스테인리스" },
  { year: "2022", name: "해양 플랜트 스풀", purchaser: "중동 EPC", location: "아랍에미리트 / 두바이", item: "플랜지, 피팅, 파이프", material: "CS / SS" },
  { year: "2021", name: "TPA JOB", purchaser: "ZARAWA Company", location: "이라크", item: "플랜지, 피팅, 롱밴드", material: "CS / 하이텐실" },
  { year: "2020", name: "TOC", purchaser: "Dubai Petroleum", location: "두바이", item: "플랜지, 피팅", material: "스테인리스 / 탄소강" },
]

export default function ExperienceList() {
  return (
    <section id="experience" className="px-6 md:px-10 py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">경력 및 실적</h2>

        <ul className="mt-8 space-y-2 list-disc list-inside text-slate-700 max-w-3xl mx-auto">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border">
            <thead className="bg-slate-100">
              <tr className="text-left text-slate-600">
                <th className="py-3 px-4">연도</th>
                <th className="py-3 px-4">프로젝트명</th>
                <th className="py-3 px-4">구매처</th>
                <th className="py-3 px-4">위치</th>
                <th className="py-3 px-4">품목</th>
                <th className="py-3 px-4">재질</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="py-3 px-4">{p.year}</td>
                  <td className="py-3 px-4">{p.name}</td>
                  <td className="py-3 px-4">{p.purchaser}</td>
                  <td className="py-3 px-4">{p.location}</td>
                  <td className="py-3 px-4">{p.item}</td>
                  <td className="py-3 px-4">{p.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
