export default function Disclaimer({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} />
      <div className="relative bg-white max-w-2xl mx-auto rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 m-0 sm:m-4">
        <h3 className="text-xl font-semibold text-slate-900">Research Use Only</h3>
        <p className="mt-3 text-slate-700 text-sm leading-relaxed">
          All products are intended for laboratory research use only. Not for human or veterinary use, diagnostic purposes, household use, or therapeutic applications. By purchasing or using these products, you confirm you are a qualified professional and will comply with all applicable laws, regulations, and institutional requirements. You agree to handle and store materials according to best laboratory practices and provided specifications.
        </p>
        <ul className="mt-4 list-disc pl-5 text-slate-700 text-sm space-y-1">
          <li>Not a dietary supplement or drug.</li>
          <li>No medical claims are made or implied.</li>
          <li>Age and professional use confirmations required at checkout.</li>
          <li>Orders may be declined if compliance criteria are not met.</li>
        </ul>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm">I Understand</button>
        </div>
      </div>
    </div>
  )
}
