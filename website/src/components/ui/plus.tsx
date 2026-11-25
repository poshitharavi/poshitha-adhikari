/** Small drawn "+" mark (two 1px lines), the Lusion style punctuation. Decorative. */
export function Plus({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`relative inline-block size-2.5 shrink-0 ${className}`}>
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
    </span>
  );
}
