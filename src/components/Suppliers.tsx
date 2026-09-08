import SupplierList from './SupplierList'

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

export default function Suppliers() {
  return <SupplierList categories={categories} heading="Our Suppliers" />
}
