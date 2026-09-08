import { ChevronDown } from 'lucide-react'

export default function SupplierList({ categories, heading }: {
  categories: { title: string; items: string[] }[]
  heading: string
}) {
  return (
    <section id="suppliers" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight md:text-3xl">{heading}</h2>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <details key={category.title} open={index === 0}
              className="group rounded-2xl border bg-white text-[#003366] shadow-sm open:bg-[#003366] open:text-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold tracking-tight">{category.title}</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <ul className="mx-5 list-disc space-y-1 pb-5 pl-5 text-sm leading-6">
                {category.items.map((name, itemIndex) => <li key={itemIndex}>{name}</li>)}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
