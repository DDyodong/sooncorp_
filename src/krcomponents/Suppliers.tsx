// src/components/Suppliers.tsx
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

type SupplierCategory = {
  title: string
  items: string[]
}

const categories: SupplierCategory[] = [
  {
    title: "Fittings",
    items: [
      "TK Corporation (한국)",
      "SBC Bend (한국)",
      "Hwajin PF (한국)",
      "Daekyung Bend (한국)",
      "Jinil Bend (한국)",
      "Kyungnam Bend (한국)",
      "Pusan Fitting (한국)",
      "Samyoung Fitting (한국)",
      "HPCO (중국)",
      "FJGX (중국)",
      "Hong Cheung (중국)",
      "TIANLONG (중국)",
      "GUANGHAO (중국)",
      "C&N (중국)",
      "MTSCO (중국)",
      "Thai Benkan Co., Ltd / BKL (태국)",
      "Tubacex (스페인)",
    ],
  },
  {
    title: "Pipes",
    items: [
      "Seah (한국)",
      "Hyundai RB (한국)",
      "DaiDuck (한국)",
      "Hyundai Steel (한국)",
      "TPCO (중국)",
      "Jiuli (중국)",
      "Walsin (중국)",
      "ChengDe (중국)",
      "Wujin (중국)",
      "BaoSteel (중국)",
      "FJGX (중국)",
      "Shandong Molong Petroleum (중국)",
      "JIANGSU XINCHANGJIANG (중국)",
      "Nippon Steel & Sumitomo Metal (일본)",
      "JFE Steel (일본)",
      "Kobelco (일본)",
      "V&M (프랑스, 독일 & 브라질)",
      "Benteler (독일)",
      "US Steel (미국)",
      "Tubacex (스페인)",
      "Tubos Reunidos (스페인)",
      "Inox Tech (이탈리아)",
      "Productos (스페인)",
    ],
  },
  {
    title: "Flanges",
    items: [
      "SH Metal (한국)",
      "YCT / YCF CO., LTD (한국)",
      "Pillar Tech (한국)",
      "Hyundai Fitting (한국)",
      "Daehyeong (한국)",
      "Myungjin Metal (한국)",
      "Felix Tech (한국)",
      "Jinchuang (중국)",
      "C&N (중국)",
      "MTSCO (중국)",
      "HP CO (중국)",
      "ZOECA (중국)",
      "Ulma (스페인)",
      "Galperti (이탈리아)",
    ],
  },
  {
    title: "Valves & Others",
    items: [
      "PK Valve (한국)",
      "DKC (한국)",
      "WILCO (한국)",
      "Woosung Valve (한국)",
      "SVT Corporation (한국)",
      "HKC Korea Precision (한국)",
      "HS Valve (한국)",
      "Kumsung Machinery (한국)",
      "KITT (한국)",
      "KJ ENG (한국)",
      "Jongang Bending (한국)",
      "Cheumwoo Industry (한국)",
      "Dongjin EF (한국) – Expansion Joint, Rubber Joint, Silicone Joint",
    ],
  },
]

function AccordionRow({
  title,
  items,
  isOpen,
  onToggle,
  index,
}: SupplierCategory & {
  isOpen: boolean
  onToggle: (i: number) => void
  index: number
}) {
  return (
    <div
      className={`rounded-2xl border shadow-sm transition ${
        isOpen ? "bg-[#003366] text-white" : "bg-white text-[#003366]"
      }`}
    >
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`panel-${index}`}
      >
        <span className="text-base font-semibold tracking-tight">{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`panel-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <ul className="list-disc space-y-1 pl-5 text-sm leading-6">
                {items.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Suppliers() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]))

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section id="suppliers" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6 flex items-center justify-center">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Our Suppliers
          </h2>
        </div>

        <div className="space-y-3">
          {categories.map((c, idx) => (
            <AccordionRow
              key={c.title}
              title={c.title}
              items={c.items}
              isOpen={openSet.has(idx)}
              index={idx}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
