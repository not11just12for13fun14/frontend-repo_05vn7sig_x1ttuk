import Spline from '@splinetool/react-spline'

export default function Hero({ onShowDisclaimer }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl">
            <p className="uppercase tracking-widest text-blue-700/90 text-xs font-semibold">Research Use Only</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">Premium Research Peptides</h1>
            <p className="mt-4 text-slate-700 text-sm sm:text-base">Ultra‑pure peptides for laboratory research. Verified specifications, COAs, and cGMP‑aligned partners. Not for human or veterinary use.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white shadow-sm transition">Browse Catalog</a>
              <button onClick={onShowDisclaimer} className="px-5 py-2.5 rounded-lg bg-white/80 hover:bg-white text-slate-900 border border-slate-200 shadow-sm transition">View Disclaimer</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
    </section>
  )
}
