export default function VirgoGlyph({ size = 32, className = '', title }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d="M12 74 L12 34 C12 20 28 20 28 34 L28 74 M28 34 C28 20 44 20 44 34 L44 74 M44 34 C44 20 60 20 60 34 L60 66 C60 84 78 88 86 76 C94 64 84 54 72 60 C62 66 68 82 84 84" />
    </svg>
  )
}
