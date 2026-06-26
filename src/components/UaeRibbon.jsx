import UaeFlag from './UaeFlag.jsx'

/**
 * Small national-pride ribbon shown at the top of every page's hero, above the
 * eyebrow/heading: the UAE flag mark + a short label on a soft pill, with a slim
 * UAE-tricolour underline. Purely decorative — placed inside each `[data-hero]`
 * block so it inherits the existing entrance stagger.
 */
export default function UaeRibbon({ label = 'United Arab Emirates', className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-50 px-4 py-[7px] font-body text-[12.5px] font-semibold tracking-[0.06em] text-soft">
        <UaeFlag className="w-5 shrink-0" />
        {label}
      </span>
      <span aria-hidden="true" className="mt-2 flex h-[3px] w-14 overflow-hidden rounded-full ring-1 ring-line">
        <span className="w-1/4 bg-uae-red" />
        <span className="flex-1 bg-uae-green" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-uae-black" />
      </span>
    </div>
  )
}
