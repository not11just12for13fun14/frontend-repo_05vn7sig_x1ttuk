import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const FALLBACK = [
  {
    id: 'demo1',
    name: 'BPC‑157',
    code: 'BP-157-5',
    description: 'Pentadecapeptide, ≥98% purity (HPLC). Lyophilized. For in vitro research only.',
    price: 49.0,
    purity: '≥98%',
    form: 'Lyophilized',
    storage: '-20°C',
    size: '5 mg',
    in_stock: true,
  },
  {
    id: 'demo2',
    name: 'TB‑500 (Thymosin Beta‑4 fragment)',
    code: 'TB-500-5',
    description: 'Synthetic peptide fragment. Certificate of analysis available. RUO.',
    price: 59.0,
    purity: '≥98%',
    form: 'Lyophilized',
    storage: '-20°C',
    size: '5 mg',
    in_stock: true,
  },
  {
    id: 'demo3',
    name: 'Semaglutide (Research Grade)',
    code: 'SEMA-R-3',
    description: 'Analytical reference standard. For research only. Not for human use.',
    price: 79.0,
    purity: '≥98%',
    form: 'Lyophilized',
    storage: '-20°C',
    size: '3 mg',
    in_stock: false,
  },
]

export default function Products({ onAdd }) {
  const [items, setItems] = useState(FALLBACK)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products`)
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length > 0) {
            setItems(data)
          }
        }
      } catch (e) {
        // fallback to demo
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Featured Peptides</h2>
            <p className="text-slate-600 mt-2">Laboratory research grade. Certificates available upon request.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <ProductCard key={p.id || p._id || p.code} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
