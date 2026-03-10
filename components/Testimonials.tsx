'use client'
import { config } from '@/config/site.config'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 flex-row-reverse justify-end">
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= rating ? '#8B1A2B' : '#E0C9A0', fontSize: '1rem' }}>★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: { name: string; wilaya: string; rating: number; text: string } }) {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-3 h-full"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
      <StarRating rating={t.rating} />
      <p className="font-cairo text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
        "{t.text}"
      </p>
      <div className="flex items-center justify-between mt-auto pt-2"
        style={{ borderTop: '1px solid var(--color-border)' }}>
        <span className="font-cairo text-xs px-2 py-0.5 rounded-full"
          style={{ background: '#8B1A2B22', color: 'var(--color-primary)' }}>
          ✓ طلبية مؤكدة
        </span>
        <div className="text-right">
          <p className="font-cairo text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{t.name}</p>
          <p className="font-cairo text-xs" style={{ color: 'var(--color-muted)' }}>{t.wilaya}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-10" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-cormorant font-semibold mb-3"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: 'var(--color-text)' }}>
            {config.testimonialsSectionTitle}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="font-cairo text-sm" style={{ color: 'var(--color-muted)' }}>
              {config.testimonialsRatingCount}
            </span>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#8B1A2B', fontSize: '1.1rem' }}>★</span>)}
            </div>
            <span className="font-cairo font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
              {config.testimonialsRating}
            </span>
          </div>
        </div>

        {/* Mobile: horizontal scroll-snap */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {config.testimonials.map((t, i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] max-w-sm">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {config.testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => document.getElementById('main-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-cairo font-bold text-base px-10 py-4 rounded-xl transition-all active:scale-95 w-full md:max-w-xs"
            style={{ backgroundColor: 'var(--color-primary)', color: '#FAF3E8', minHeight: '52px' }}
          >
            {config.ctaButtonText}
          </button>
        </div>
      </div>
    </section>
  )
}
