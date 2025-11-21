import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

function Cart({ items, onClose, onCheckout }) {
  const total = useMemo(() => items.reduce((s, i) => s + i.price * (i.qty || 1), 0), [items])
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} />
      <div className="relative bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Your Order</h3>
        <div className="mt-4 space-y-3 max-h-72 overflow-auto pr-2">
          {items.length === 0 ? (
            <p className="text-sm text-slate-600">No items added yet.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-slate-900 font-medium">{it.name} <span className="text-slate-500">({it.size})</span></p>
                  <p className="text-slate-500">{it.code}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-900">${(it.price * (it.qty || 1)).toFixed(2)}</p>
                  <p className="text-slate-500">Qty {(it.qty || 1)}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-slate-600 text-sm">Subtotal</span>
          <span className="text-slate-900 font-semibold">${total.toFixed(2)}</span>
        </div>
        <p className="mt-3 text-xs text-slate-600">All products are for laboratory research use only. Compliance acknowledgements are required at checkout.</p>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-900">Close</button>
          <button onClick={onCheckout} className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white">Request Invoice</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [disclaimerOpen, setDisclaimerOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [message, setMessage] = useState('')

  const addToCart = (p) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id || i.code === p.code)
      if (existing) {
        return prev.map((i) => (i === existing ? { ...i, qty: (i.qty || 1) + 1 } : i))
      }
      return [...prev, { ...p, qty: 1 }]
    })
    setCartOpen(true)
  }

  const checkout = async () => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    try {
      const payload = {
        items: cart.map((c) => ({ product_id: c.id || c.code, quantity: c.qty || 1 })),
        customer_name: 'Research Buyer',
        email: 'buyer@example.com',
        institution: 'Lab',
        country: 'US',
        research_use_only_ack: true,
        age_over_21_ack: true,
      }
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) {
        setMessage('Order received. Our team will issue a research‑only invoice shortly.')
        setCart([])
        setCartOpen(false)
      } else {
        setMessage(data?.detail || 'Could not submit order.')
      }
    } catch (e) {
      setMessage('Could not reach server. Please try again later.')
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setDisclaimerOpen(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onOpenCart={() => setCartOpen(true)} onShowDisclaimer={() => setDisclaimerOpen(true)} />
      <Hero onShowDisclaimer={() => setDisclaimerOpen(true)} />
      <Products onAdd={addToCart} />
      <Footer />

      {cartOpen && (
        <Cart items={cart} onClose={() => setCartOpen(false)} onCheckout={checkout} />
      )}
      <Disclaimer open={disclaimerOpen} onClose={() => setDisclaimerOpen(false)} />

      {message && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2 rounded-full shadow-lg">
          {message}
        </div>
      )}
    </div>
  )
}

export default App
