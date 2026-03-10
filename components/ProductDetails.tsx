'use client'
import { useState } from 'react'
import { config } from '@/config/site.config'

const HAIR_TYPES = ['جاف وتالف', 'مصبوغ', 'هش وينكسر', 'طبيعي']
const SETS = ['الثنائي (شامبو + سوان)', 'شامبو فقط', 'سوان فقط']

export default function ProductDetails() {
  const [selectedHairType, setSelectedHairType] = useState(HAIR_TYPES[0])
  const [selectedSet, setSelectedSet] = useState(SETS[0])

  return (
    <div className="flex flex-col gap-5">
      {/* Name + description */}
      <div>
        <h2
          className="font-cormorant font-semibold leading-tight mb-2"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--color-text)' }}
        >
          {config.productNameAr}
        </h2>
        <p className="font-cairo text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          {config.productDescription}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="font-cairo font-bold text-2xl" style={{ color: 'var(--color-primary)' }}>
          {config.price}
        </span>
        {config.originalPrice && (
          <span className="font-cairo text-base line-through" style={{ color: 'var(--color-muted)' }}>
            {config.originalPrice}
          </span>
        )}
        {config.originalPrice && (
          <span
            className="font-cairo text-xs font-bold px-2 py-1 rounded-full"
            style={{ background: '#8B1A2B22', color: 'var(--color-primary)' }}
          >
            وفري {Math.round(
              (parseInt(config.originalPrice.replace(/\D/g,'')) - parseInt(config.price.replace(/\D/g,'')))
            ).toLocaleString('ar-DZ')} DA
          </span>
        )}
      </div>

      {/* Hair type selector */}
      <div>
        <p className="font-cairo text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
          نوع شعرك:
        </p>
        <div className="flex flex-wrap gap-2">
          {HAIR_TYPES.map(t => (
            <button
              key={t}
              onClick={() => setSelectedHairType(t)}
              className="font-cairo text-sm px-3 py-2 rounded-lg border transition-all"
              style={{
                borderColor: selectedHairType === t ? 'var(--color-primary)' : 'var(--color-border)',
                background: selectedHairType === t ? 'var(--color-primary)' : 'transparent',
                color: selectedHairType === t ? '#FAF3E8' : 'var(--color-text)',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Set selector */}
      <div>
        <p className="font-cairo text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
          اختاري الطلبية:
        </p>
        <div className="flex flex-col gap-2">
          {SETS.map(s => (
            <button
              key={s}
              onClick={() => setSelectedSet(s)}
              className="font-cairo text-sm px-4 py-3 rounded-lg border text-right transition-all"
              style={{
                borderColor: selectedSet === s ? 'var(--color-primary)' : 'var(--color-border)',
                background: selectedSet === s ? '#8B1A2B11' : 'transparent',
                color: 'var(--color-text)',
              }}
            >
              <span
                className="inline-block w-3 h-3 rounded-full border-2 ml-2 align-middle"
                style={{
                  borderColor: selectedSet === s ? 'var(--color-primary)' : 'var(--color-muted)',
                  background: selectedSet === s ? 'var(--color-primary)' : 'transparent',
                }}
              />
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-3 pt-2">
        {[
          { icon: '🧪', text: 'مختبر طبيًا' },
          { icon: '🌿', text: 'بدون سلفات' },
          { icon: '✅', text: 'آمن للشعر المصبوغ' },
        ].map(b => (
          <div
            key={b.text}
            className="flex items-center gap-1.5 font-cairo text-xs px-3 py-1.5 rounded-full"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-muted)' }}
          >
            <span>{b.icon}</span>
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
