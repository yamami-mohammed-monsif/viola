'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { config } from '@/config/site.config'

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const total = config.galleryImages.length

  const prev = () => setActiveIdx(i => i === 0 ? total - 1 : i - 1)
  const next = () => setActiveIdx(i => i === total - 1 ? 0 : i + 1)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="flex flex-col gap-3">

      {/* ── Large image — smooth sliding track ── */}
      <div
        className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative cursor-grab active:cursor-grabbing group"
        onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          touchEndX.current = e.changedTouches[0].clientX
          const diff = touchStartX.current - touchEndX.current
          // RTL: swipe left (diff > 0) → prev, swipe right (diff < 0) → next
          if (diff > 30) prev()
          else if (diff < -30) next()
        }}
      >
        {/* Sliding track — all images in a flex row, shifted by translateX */}
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            width: `${total * 100}%`,
            // In RTL, we shift right to show earlier images.
            // Index 0 = no shift, index 1 = shift right by (100/total)%, etc.
            transform: `translateX(${activeIdx * (100 / total)}%)`,
          }}
        >
          {config.galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative h-full shrink-0"
              style={{ width: `${100 / total}%` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Prev arrow — RTL: previous = right side, chevron › */}
        <button
          onClick={prev}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-2xl leading-none"
          style={{ background: 'rgba(44,26,10,0.45)' }}
          aria-label="الصورة السابقة"
        >
          ›
        </button>
        {/* Next arrow — RTL: next = left side, chevron ‹ */}
        <button
          onClick={next}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-2xl leading-none"
          style={{ background: 'rgba(44,26,10,0.45)' }}
          aria-label="الصورة التالية"
        >
          ‹
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {config.galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="rounded-full transition-all"
              style={{
                width: activeIdx === i ? '20px' : '6px',
                height: '6px',
                background: activeIdx === i ? 'var(--color-primary)' : 'rgba(250,243,232,0.6)',
              }}
              aria-label={`الصورة ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {config.galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className="aspect-square rounded-lg overflow-hidden border-2 transition-all relative"
            style={{
              borderColor: activeIdx === i ? 'var(--color-primary)' : 'transparent',
              opacity: activeIdx === i ? 1 : 0.55,
            }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="80px" quality={60} />
          </button>
        ))}
      </div>
    </div>
  )
}
