"use client";
import { config } from "@/config/site.config";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Responsive hero image */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(max-width: 640px)" srcSet={config.heroImageMobile} />
        <source media="(max-width: 1024px)" srcSet={config.heroImageTablet} />
        <img
          src={config.heroImage}
          alt={`${config.productNameAr} — ${config.brandName}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
      </picture>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(44,26,10,0.75) 0%, rgba(44,26,10,0.15) 45%, transparent 70%)",
        }}
      />

      {/* ── Brand name — top-left corner logo mark ── */}
      <div className="absolute top-6 left-6 z-20 flex flex-col items-center gap-1">
        <p
          className="font-cormorant font-bold tracking-[0.25em] uppercase"
          style={{ fontSize: "1rem", color: "#8B1A2B" }}
        >
          {config.brandName}
        </p>
        <p
          className="font-cairo tracking-widest"
          style={{
            fontSize: "0.6rem",
            color: "#8B1A2B",
            letterSpacing: "0.2em",
          }}
        >
          PARIS · PROFESSIONNEL
        </p>
      </div>

      {/* ── Content zone: RIGHT (ml-auto pushes block to right regardless of RTL) ── */}
      <div className="relative z-10 min-h-screen flex items-end md:items-center px-5 md:px-12 lg:px-20 pb-12 md:pb-0">
        <div className="mr-0 ml-auto w-full md:w-[50%] flex flex-col gap-4 items-start">
          {/* Headline — main promise, not the brand name */}
          <h1
            className="font-cairo font-semibold leading-tight hero-animate-1"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", color: "#FAF3E8" }}
          >
            {config.tagline}
          </h1>

          {/* Subheadline */}
          <p
            className="font-cairo text-base md:text-lg hero-animate-2"
            style={{ color: "rgba(250,243,232,0.85)" }}
          >
            {config.taglineSecondary}{" "}
          </p>

          {/* Price */}
          <div className="flex items-center justify-end gap-3 hero-animate-3">
            <span
              className="font-cairo font-bold text-2xl md:text-3xl"
              style={{ color: "#FAF3E8" }}
            >
              {config.price}
            </span>
            {config.originalPrice && (
              <span
                className="font-cairo text-lg line-through"
                style={{ color: "rgba(250,243,232,0.5)" }}
              >
                {config.originalPrice}
              </span>
            )}
            {config.stockCount > 0 && (
              <span
                className="font-cairo text-xs font-bold px-2 py-1 rounded-full"
                style={{ background: "#8B1A2B", color: "#FAF3E8" }}
              >
                {config.stockCount} قطعة باقية
              </span>
            )}
          </div>

          {/* Product features */}
          <ul className="flex flex-col items-start gap-2 hero-animate-4">
            {[
              { icon: "✨", text: "بدون سلفات — لطيف على الشعر المصبوغ" },
              {
                icon: "🚚",
                text: `توصيل ${config.deliveryTime} — ${config.deliveryPrice}`,
              },
              { icon: "📦", text: "جميع ولايات الجزائر الـ 58" },
              { icon: "↩️", text: "استرجاع خلال 7 أيام" },
            ].map((f) => (
              <li
                key={f.text}
                className="flex items-center justify-end gap-2 font-cairo text-sm"
                style={{ color: "rgba(250,243,232,0.85)" }}
              >
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hero-animate-5 w-full">
            <button
              onClick={() =>
                document
                  .getElementById("main-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-cairo font-bold text-base px-10 py-4 rounded-xl transition-all active:scale-95 w-full md:max-w-xs"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#FAF3E8",
                minHeight: "52px",
              }}
            >
              {config.ctaButtonText}
            </button>
            <p
              className="font-cairo text-xs mt-2 text-center md:text-right"
              style={{ color: "rgba(250,243,232,0.6)" }}
            >
              {config.deliveryNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
