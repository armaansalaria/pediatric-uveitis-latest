export function SiteDisclaimer() {
  return (
    <section className="border-t border-primary-foreground/15 bg-primary text-primary-foreground" aria-labelledby="site-disclaimer-heading">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2
          id="site-disclaimer-heading"
          className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase"
        >
          Disclaimer
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-primary-foreground/75">
          This site is for general education only and does not replace professional medical advice. If you have immediate concerns about your child&apos;s eyes, please contact their care team or seek urgent care. We deeply respect First Nations cultures and traditional health practices, aiming to share information without imposing Western medical views.
        </p>
      </div>
    </section>
  )
}
