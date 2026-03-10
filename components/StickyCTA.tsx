'use client'
import { useEffect, useState } from 'react'
import { config } from '@/config/site.config'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const scrollToMain = () => {
    document.getElementById('main-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="flex items-center justify-center px-5 py-3">
        <button
          onClick={scrollToMain}
          className="font-cairo font-bold text-base px-10 py-3 rounded-xl transition-all active:scale-95 w-full"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: '#FAF3E8',
            minHeight: '48px',
          }}
        >
          {config.ctaButtonText}
        </button>
      </div>
    </div>
  )
}
