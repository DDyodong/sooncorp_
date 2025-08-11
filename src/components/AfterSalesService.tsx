import { CheckCircle, Clock3, Users, Wrench, Package, Shield, Repeat } from "lucide-react"

type Staff = { no: number; role: string }
type Period = { no: number; type: string; period: string }
type Step = { title: string; desc: string }

const staffs: Staff[] = [
  { no: 1, role: "Sales" },
  { no: 2, role: "QA / QC Personnel" },
  { no: 3, role: "Logistics" },
]

const periods: Period[] = [
  { no: 1, type: "Supply in Stock", period: "Immediately" },
  { no: 2, type: "Repair & Supply", period: "1 week" },
  { no: 3, type: "Re-production & Supply", period: "4 weeks" },
]

const steps: Step[] = [
  { title: "Product Info → Customer", desc: "Provide product information before delivery" },
  { title: "Customer’s Approval", desc: "Approval (Correction/Rework if not approved)" },
  { title: "Products Delivery", desc: "Delivery and handover" },
  { title: "Customer’s Inspection", desc: "Inspection / Claim submission in case of issues" },
  { title: "Assembling", desc: "Installation/assembly support (upon request)" },
]

export default function AfterSalesService() {
  return (
    <section id="after-sales" className="px-6 md:px-10 py-16 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">After Sales Service</h2>

        {/* top: promise bullets */}
        <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-slate-700">
          <li className="flex gap-3"><Shield className="size-5 shrink-0" />Quality assurance and documentation support (QA/QC, CoC, Mill Test Report)</li>
          <li className="flex gap-3"><Package className="size-5 shrink-0" />Spare parts always in stock / Emergency response</li>
          <li className="flex gap-3"><Wrench className="size-5 shrink-0" />On-site maintenance, rework, coating/machining support</li>
          <li className="flex gap-3"><Repeat className="size-5 shrink-0" />Minimize reproduction lead time and offer alternatives</li>
        </ul>

        {/* middle: tables */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="size-5" /><h3 className="font-semibold text-lg">Staffs for After Sales</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b">
                    <th className="py-2 pr-4 w-12">No.</th>
                    <th className="py-2">Position</th>
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
              <Clock3 className="size-5" /><h3 className="font-semibold text-lg">After Sales Service Period</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b">
                    <th className="py-2 pr-4 w-12">No.</th>
                    <th className="py-2">Type of Treatment</th>
                    <th className="py-2">Period</th>
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

        {/* bottom: flow */}
        <div className="mt-10 rounded-2xl border p-6">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-4"><CheckCircle className="size-5" />Process Flow</h3>
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
