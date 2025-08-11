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
      "TK Corporation (Korea)",
      "SBC Bend (Korea)",
      "Hwajin PF (Korea)",
      "Daekyung Bend (Korea)",
      "Jinil Bend (Korea)",
      "Kyungnam Bend (Korea)",
      "Pusan Fitting (Korea)",
      "Samyoung Fitting (Korea)",
      "HPCO (China)",
      "FJGX (China)",
      "Hong Cheung (China)",
      "TIANLONG (China)",
      "GUANGHAO (China)",
      "C&N (China)",
      "MTSCO (China)",
      "Thai Benkan Co., Ltd / BKL (Thailand)",
      "Tubacex (Spain)",
    ],
  },
  {
    title: "Pipes",
    items: [
      "Seah (Korea)",
      "Hyundai RB (Korea)",
      "DaiDuck (Korea)",
      "Hyundai Steel (Korea)",
      "TPCO (China)",
      "Jiuli (China)",
      "Walsin (China)",
      "ChengDe (China)",
      "Wujin (China)",
      "BaoSteel (China)",
      "FJGX (China)",
      "Shandong Molong Petroleum (China)",
      "JIANGSU XINCHANGJIANG (China)",
      "Nippon Steel & Sumitomo Metal (Japan)",
      "JFE Steel (Japan)",
      "Kobelco (Japan)",
      "V&M (France, Germany & Brazil)",
      "Benteler (Germany)",
      "US Steel (USA)",
      "Tubacex (Spain)",
      "Tubos Reunidos (Spain)",
      "Inox Tech (Italy)",
      "Productos (Spain)",
    ],
  },
  {
    title: "Flanges",
    items: [
      "SH Metal (Korea)",
      "YCT / YCF CO., LTD (Korea)",
      "Pillar Tech (Korea)",
      "Hyundai Fitting (Korea)",
      "Daehyeong (Korea)",
      "Myungjin Metal (Korea)",
      "Felix Tech (Korea)",
      "Jinchuang (China)",
      "C&N (China)",
      "MTSCO (China)",
      "HP CO (China)",
      "ZOECA (China)",
      "Ulma (Spain)",
      "Galperti (Italy)",
    ],
  },
  {
    title: "Valves & Others",
    items: [
      "PK Valve (Korea)",
      "DKC (Korea)",
      "WILCO (Korea)",
      "Woosung Valve (Korea)",
      "SVT Corporation (Korea)",
      "HKC Korea Precision (Korea)",
      "HS Valve (Korea)",
      "Kumsung Machinery (Korea)",
      "KITT (Korea)",
      "KJ ENG (Korea)",
      "Jongang Bending (Korea)",
      "Cheumwoo Industry (Korea)",
      "Dongjin EF (Korea) – Expansion Joint, Rubber Joint, Silicone Joint",
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
        isOpen
          ? "bg-[#003366] text-white"
          : "bg-white text-[#003366]"
      }`}
    >
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`panel-${index}`}
      >
        <span className="text-base font-semibold tracking-tight">
          {title}
        </span>
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
  // 처음에는 첫 섹션만 열어둠
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
