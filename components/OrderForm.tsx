"use client";
import { useState } from "react";
import { config, WILAYAS } from "@/config/site.config";

type OrderFormProps = {
  onSubmitSuccess?: () => void;
};

export default function OrderForm({ onSubmitSuccess }: OrderFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", wilaya: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "الاسم مطلوب";
    if (!form.phone.trim() || !/^0[5-7]\d{8}$/.test(form.phone.trim()))
      e.phone = "أدخلي رقم هاتف صحيح";
    if (!form.wilaya) e.wilaya = "اختاري ولايتك";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
    onSubmitSuccess?.();
  };

  const whatsappMsg = encodeURIComponent(
    `السلام عليكم، نحب نطلب:\n` +
      `المنتج: ${config.productNameAr}\n` +
      `الاسم: ${form.name}\n` +
      `الهاتف: ${form.phone}\n` +
      `الولاية: ${form.wilaya}\n` +
      `السعر: ${config.price}`,
  );
  const whatsappLink = `https://wa.me/${config.whatsappNumber}?text=${whatsappMsg}`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
          style={{ background: "var(--color-primary)", color: "#FAF3E8" }}
        >
          ✓
        </div>
        <h3
          className="font-cormorant font-semibold text-xl"
          style={{ color: "var(--color-text)" }}
        >
          شكرًا! الطلبية وصلت
        </h3>
        <p
          className="font-cairo text-sm"
          style={{ color: "var(--color-muted)" }}
        >
          راح نتواصل معك على رقم <strong>{form.phone}</strong> خلال 24 ساعة
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3
          className="font-cormorant font-semibold text-xl mb-1"
          style={{
            color: "var(--color-text)",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
          }}
        >
          احصلي عليه الآن
        </h3>
        {config.stockCount > 0 && (
          <p
            className="font-cairo text-xs"
            style={{ color: "var(--color-primary)" }}
          >
            ⚡ {config.stockCount} قطعة باقية فقط — الطلب السريع يضمن لك المنتج
          </p>
        )}
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1">
        <label
          className="font-cairo text-sm font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          الاسم الكامل
        </label>
        <input
          type="text"
          placeholder="مثال: فاطمة بن عمر"
          value={form.name}
          onChange={(e) => {
            setForm((f) => ({ ...f, name: e.target.value }));
            setErrors((er) => ({ ...er, name: "" }));
          }}
          className="w-full font-cairo text-sm px-4 py-3 rounded-xl outline-none text-right"
          style={{
            background: "var(--color-surface)",
            border: `1px solid ${errors.name ? "#8B1A2B" : "var(--color-border)"}`,
            color: "var(--color-text)",
            minHeight: "48px",
          }}
        />
        {errors.name && (
          <p className="font-cairo text-xs" style={{ color: "#8B1A2B" }}>
            {errors.name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label
          className="font-cairo text-sm font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          رقم الهاتف
        </label>
        <input
          type="tel"
          placeholder="0550 000 000"
          value={form.phone}
          onChange={(e) => {
            setForm((f) => ({ ...f, phone: e.target.value }));
            setErrors((er) => ({ ...er, phone: "" }));
          }}
          className="w-full font-cairo text-sm px-4 py-3 rounded-xl outline-none text-right"
          style={{
            background: "var(--color-surface)",
            border: `1px solid ${errors.phone ? "#8B1A2B" : "var(--color-border)"}`,
            color: "var(--color-text)",
            minHeight: "48px",
          }}
          dir="ltr"
        />
        {errors.phone && (
          <p className="font-cairo text-xs" style={{ color: "#8B1A2B" }}>
            {errors.phone}
          </p>
        )}
      </div>

      {/* Wilaya */}
      <div className="flex flex-col gap-1">
        <label
          className="font-cairo text-sm font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          الولاية
        </label>
        <select
          value={form.wilaya}
          onChange={(e) => {
            setForm((f) => ({ ...f, wilaya: e.target.value }));
            setErrors((er) => ({ ...er, wilaya: "" }));
          }}
          className="w-full font-cairo text-sm px-4 py-3 rounded-xl outline-none text-right appearance-none"
          style={{
            background: "var(--color-surface)",
            border: `1px solid ${errors.wilaya ? "#8B1A2B" : "var(--color-border)"}`,
            color: form.wilaya ? "var(--color-text)" : "var(--color-muted)",
            minHeight: "48px",
          }}
        >
          <option value="">اختاري ولايتك</option>
          {WILAYAS.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
        {errors.wilaya && (
          <p className="font-cairo text-xs" style={{ color: "#8B1A2B" }}>
            {errors.wilaya}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={handleSubmit}
          className="w-full font-cairo font-bold text-base py-4 rounded-xl transition-all active:scale-95"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "#FAF3E8",
            minHeight: "54px",
          }}
        >
          {config.ctaButtonText}
        </button>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 font-cairo text-sm py-4 rounded-xl border transition-all active:scale-95"
          style={{
            borderColor: "#25D366",
            color: "#25D366",
            minHeight: "54px",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          اطلبي على واتساب
        </a>
      </div>
    </div>
  );
}
