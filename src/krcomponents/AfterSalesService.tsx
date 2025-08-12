import { CheckCircle, Clock3, Users, Wrench, Package, Shield, Repeat } from "lucide-react"

type Staff = { no: number; role: string }
type Period = { no: number; type: string; period: string }
type Step = { title: string; desc: string }

const staffs: Staff[] = [
  { no: 1, role: "영업" },
  { no: 2, role: "품질관리(QA/QC)" },
  { no: 3, role: "물류" },
]

const periods: Period[] = [
  { no: 1, type: "재고 공급", period: "즉시" },
  { no: 2, type: "수리 후 공급", period: "1주" },
  { no: 3, type: "재생산 후 공급", period: "4주" },
]

const steps: Step[] = [
  { title: "제품 정보 → 고객", desc: "납품 전에 제품 정보를 제공합니다" },
  { title: "고객 승인", desc: "승인 진행 (미승인 시 수정/재작업)" },
  { title: "제품 납품", desc: "납품 및 인도" },
  { title: "고객 검사", desc: "검사 진행 / 문제 시 클레임 접수" },
  { title: "설치/조립", desc: "요청 시 설치·조립 지원" },
]

export default function AfterSalesService() {
  return (
    <section id="after-sales" className="px-6 md:px-10 py-16 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">A/S 서비스</h2>

        {/* 상단: 약속/핵심 포인트 */}
        <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-slate-700">
          <li className="flex gap-3"><Shield className="size-5 shrink-0" />품질 보증 및 문서 지원 (QA/QC, CoC, Mill Test Report)</li>
          <li className="flex gap-3"><Package className="size-5 shrink-0" />상시 예비부품 보유 / 긴급 대응</li>
          <li className="flex gap-3"><Wrench className="size-5 shrink-0" />현장 유지보수·재작업·코팅/가공 지원</li>
          <li className="flex gap-3"><Repeat className="size-5 shrink-0" />재생산 리드타임 최소화 및 대안 제시</li>
        </ul>

        {/* 중간: 표 영역 */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="size-5" /><h3 className="font-semibold text-lg">A/S 담당 인력</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b">
                    <th className="py-2 pr-4 w-12">No.</th>
                    <th className="py-2">직무</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs.map(s => (
                    <tr key={s.no} className="border-b last:border-0">
                      <td className="py-2 pr-4">{s.no}</td>
                      <td className="py-2">{s.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border p-5">
            <div className="flex items-center gap-2 mb-4">
              <Clock3 className="size-5" /><h3 className="font-semibold text-lg">A/S 처리 기간</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b">
                    <th className="py-2 pr-4 w-12">No.</th>
                    <th className="py-2">처리 유형</th>
                    <th className="py-2">소요 기간</th>
                  </tr>
                </thead>
                <tbody>
                  {periods.map(p => (
                    <tr key={p.no} className="border-b last:border-0">
                      <td className="py-2 pr-4">{p.no}</td>
                      <td className="py-2">{p.type}</td>
                      <td className="py-2">{p.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 하단: 처리 절차 플로우 */}
        <div className="mt-10 rounded-2xl border p-6">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-4"><CheckCircle className="size-5" />처리 절차</h3>
          <ol className="grid md:grid-cols-5 gap-4 text-sm">
            {steps.map((s, i) => (
              <li key={i} className="relative rounded-xl border p-4">
                <p className="font-medium">{s.title}</p>
                <p className="text-slate-600 mt-1">{s.desc}</p>
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 rotate-90 md:rotate-0 text-slate-400">➜</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}