'use client'
import { useState } from 'react'
import { config } from '@/config/site.config'
import Gallery from '@/components/Gallery'
import ProductDetails from '@/components/ProductDetails'
import OrderForm from '@/components/OrderForm'
import Toast from '@/components/Toast'

export default function MainSection() {
  const [showToast, setShowToast] = useState(false)

  return (
    <>
      <Toast
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        message={config.submitNotificationMessage}
      />
      <section
        id="main-section"
        className="py-14"
        style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)' }}
      >
        <div className="px-4 md:px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left column — sticky gallery */}
          <div className="md:sticky md:top-8">
            <Gallery />
          </div>
          {/* Right column — product details + order form */}
          <div className="flex flex-col gap-8">
            <ProductDetails />
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
              <OrderForm onSubmitSuccess={() => setShowToast(true)} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
