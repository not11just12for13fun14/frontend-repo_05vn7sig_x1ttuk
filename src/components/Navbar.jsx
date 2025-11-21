import { useState } from 'react'
import { ShoppingCart, FlaskConical, Menu } from 'lucide-react'

export default function Navbar({ onOpenCart, onShowDisclaimer }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <FlaskConical className="w-6 h-6 text-blue-700" />
            <span className="text-slate-900 font-semibold tracking-tight">Aquila Peptides</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#products" className="hover:text-slate-900 transition">Products</a>
            <button onClick={onShowDisclaimer} className="hover:text-slate-900 transition">Compliance</button>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={onOpenCart} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Order</span>
            </button>
            <button className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
              <Menu className="w-6 h-6 text-slate-800" />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            <a href="#products" className="block">Products</a>
            <button onClick={onShowDisclaimer} className="block">Compliance</button>
            <a href="#contact" className="block">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
