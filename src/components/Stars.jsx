/** Star rating row. `count` filled out of 5. Accessible label, decorative SVGs. */
export default function Stars({ count = 5, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill={i < count ? '#D7261E' : 'none'}
          stroke={i < count ? '#D7261E' : '#C9CFD8'}
          strokeWidth="1.6"
        >
          <path
            strokeLinejoin="round"
            d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.95L12 2.5z"
          />
        </svg>
      ))}
    </div>
  )
}
