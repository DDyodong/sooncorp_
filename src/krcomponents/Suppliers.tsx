import SupplierList from '../components/SupplierList'

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

export default function Suppliers() {
  return <SupplierList categories={categories} heading="공급사" />
}
