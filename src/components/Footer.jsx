export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-slate-900 font-semibold">Aquila Peptides</h4>
          <p className="text-slate-600 text-sm mt-2">Elevated research‑grade peptides with rigorous documentation.</p>
        </div>
        <div>
          <h5 className="text-slate-900 font-semibold mb-2">Compliance</h5>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Research Use Only</li>
            <li>COA on request</li>
            <li>cGMP‑aligned partners</li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 font-semibold mb-2">Contact</h5>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Email: support@aquilapeptides.example</li>
            <li>Hours: Mon–Fri, 9am–5pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Aquila Peptides • Research use only</div>
    </footer>
  )
}
