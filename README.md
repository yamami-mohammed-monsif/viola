# VIOLA — Landing Page

## كيفاش تبدل المعلومات

افتح الملف `config/site.config.ts` وبدل القيم:

```
brandName      → اسم البراند
tagline        → العنوان الرئيسي
taglineSecondary → العنوان الثانوي
price          → السعر الجديد
originalPrice  → السعر المشطوب (اتركه "" باش يختفي)
stockCount     → عدد القطع الباقية
whatsappNumber → رقم الواتساب (بدون +)
testimonials   → بدل التعليقات بتعليقات حقيقية
```

## كيفاش تبدل الصور

ضع الصور في `public/images/`:

- `hero-desktop.jpg` — صورة الهيرو للـ Desktop (16:9)
- `hero-tablet.jpg` — صورة الهيرو للـ Tablet (4:3)
- `hero-mobile.jpg` — صورة الهيرو للموبايل (9:16)
- `gallery-1.jpg` إلى `gallery-5.jpg` — صور الغالري

## كيفاش تشغل المشروع محليًا

```bash
npm install
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000)

## كيفاش تنشر الموقع على Vercel (مجاني)

1. ارفع المشروع على GitHub
2. روح على [vercel.com](https://vercel.com) وسجل دخول
3. اضغط "Add New Project"
4. اختر الـ repo
5. اضغط Deploy — خلاص!

---

## Checklist قبل النشر

- [ ] بدلت `brandName` و `tagline`
- [ ] بدلت `price` و `originalPrice`
- [ ] بدلت `whatsappNumber`
- [ ] بدلت `instagramHandle`
- [ ] بدلت الصور في `public/images/`
- [ ] بدلت `testimonials` بتعليقات حقيقية
- [ ] جربت الموقع على الموبايل قبل النشر

---

Pour toute aide: contactez-nous sur WhatsApp
