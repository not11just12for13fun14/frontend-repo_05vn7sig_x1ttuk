import { FlaskConical, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  const { name, code, description, price, purity, size, in_stock } = product
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-slate-900 font-semibold tracking-tight">{name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">Catalog: {code}</p>
        </div>
        <FlaskConical className="w-6 h-6 text-blue-700" />
      </div>
      <p className="mt-3 text-sm text-slate-700 line-clamp-3">{description}</p>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600"/>Purity {purity}</div>
        <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-700"/>Size {size}</div>
        <div className="flex items-center gap-1.5"><span className={`w-2 h-2 rounded-full ${in_stock ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>{in_stock ? 'In Stock' : 'Backorder'}</div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-slate-900 font-semibold">${price.toFixed(2)}</span>
        <button onClick={() => onAdd(product)} className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm shadow-sm">Add</button>
      </div>
    </div>
  )
}
