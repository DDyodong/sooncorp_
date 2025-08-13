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
  "Carrying out piping material manufacturing and sourcing projects since 2020",
  "Global supply record and provision of high-quality products",
  "Compliance with standards for onshore/offshore/plant/construction projects",
  "Commitment to customer satisfaction and continuous improvement",
]

const projects: Project[] = [
  { year: "2023", name: "Piping Valve Modernization Revamping", purchaser: "Domestic EPC", location: "Korea / Hyundai Heavy Industries, etc.", item: "Fitting, Pipe", material: "Carbon / Alloy / Stainless" },
  { year: "2022", name: "Offshore Plant Spool", purchaser: "Middle East EPC", location: "UAE / Dubai", item: "Flange, Fitting, Pipe", material: "CS / SS" },
  { year: "2021", name: "TPA JOB", purchaser: "ZARAWA Company", location: "Iraq", item: "Flange, Fitting, Long Bend", material: "CS / Hi-Tensile" },
  { year: "2020", name: "TOC", purchaser: "Dubai Petroleum", location: "Dubai", item: "Flange, Fitting", material: "Stainless / Carbon" },
]

export default function ExperienceList() {
  return (
    <section id="experience" className="px-6 md:px-10 py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Experience List</h2>

        <ul className="mt-8 space-y-2 list-disc list-inside text-slate-700 max-w-3xl mx-auto">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border">
            <thead className="bg-slate-100">
              <tr className="text-left text-slate-600">
                <th className="py-3 px-4">Year</th>
                <th className="py-3 px-4">Project Name</th>
                <th className="py-3 px-4">Purchaser</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Item</th>
                <th className="py-3 px-4">Material Reference</th>
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