import { config } from '@/config/site.config'

export default function Footer() {
  return (
    <footer
      className="py-10 px-4 text-center"
      style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}
    >
      <p
        className="font-cormorant font-semibold text-2xl mb-3"
        style={{ color: 'var(--color-primary)' }}
      >
        {config.brandName}
      </p>
      <div className="flex items-center justify-center gap-6 mb-4">
        {config.instagramHandle && (
          <a
            href={`https://instagram.com/${config.instagramHandle.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-cairo text-sm transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-muted)' }}
          >
            📸 {config.instagramHandle}
          </a>
        )}
        <a
          href={`https://wa.me/${config.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-cairo text-sm transition-opacity hover:opacity-70"
          style={{ color: '#25D366' }}
        >
          واتساب
        </a>
      </div>
      <p className="font-cairo text-xs" style={{ color: 'var(--color-muted)' }}>
        © {new Date().getFullYear()} {config.brandName} — جميع الحقوق محفوظة
      </p>
    </footer>
  )
}
