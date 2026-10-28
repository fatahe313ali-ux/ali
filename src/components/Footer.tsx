import { Instagram, Send, Phone, MapPin, MessageCircle } from 'lucide-react';
import { NAV_LINKS, CLINIC_INFO } from '@/data/site';

export function Footer() {
  const year = new Intl.NumberFormat('fa-IR', { numberingSystem: 'latn' }).format(
    new Date().getFullYear(),
  );

  return (
    <footer className="bg-charcoal-900 text-cream-200/80 relative">
      {/* gold accent line */}
      <div className="absolute top-0 inset-x-0 h-px gold-line" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500 text-gold-400 text-lg font-bold">
                ر
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-cream-50 text-lg font-bold">رُخ‌سار</span>
                <span className="mt-0.5 text-gold-400 text-[10px] font-medium tracking-persian-wider">
                  کلینیک پوست و زیبایی
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-loose text-cream-200/50">
              مرکز تخصصی مراقبت از پوست و زیبایی، با تیمی مجرب و محیطی آرامش‌بخش.
            </p>
          </div>

          <nav aria-label="پیوندهای سریع">
            <h3 className="text-cream-50 text-sm font-bold">پیوندهای سریع</h3>
            <div className="mt-4 h-px w-8 bg-gold-500/40" />
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200/50 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-cream-50 text-sm font-bold">اطلاعات تماس</h3>
            <div className="mt-4 h-px w-8 bg-gold-500/40" />
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-gold-400" aria-hidden="true" />
                <a href={CLINIC_INFO.phoneHref} className="hover:text-gold-400 transition-colors" dir="ltr">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold-400" aria-hidden="true" />
                <span className="leading-relaxed text-cream-200/50">{CLINIC_INFO.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cream-50 text-sm font-bold">ما را دنبال کنید</h3>
            <div className="mt-4 h-px w-8 bg-gold-500/40" />
            <p className="mt-4 text-sm text-cream-200/50 leading-relaxed">
              برای مشاهده نمونه‌کارها و اخبار کلینیک، ما را در شبکه‌های اجتماعی دنبال کنید.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={CLINIC_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام رخ‌سار"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream-200/10 text-cream-200/60 hover:border-gold-400 hover:text-gold-400 hover:bg-gold-500/5 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={CLINIC_INFO.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام رخ‌سار"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream-200/10 text-cream-200/60 hover:border-gold-400 hover:text-gold-400 hover:bg-gold-500/5 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href={CLINIC_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساپ رخ‌سار"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream-200/10 text-cream-200/60 hover:border-gold-400 hover:text-gold-400 hover:bg-gold-500/5 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-200/10 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-cream-200/40">
            © {year} کلینیک زیبایی رُخ‌سار. تمام حقوق محفوظ است.
          </p>
          <p className="text-xs text-cream-200/30">
            این یک وب‌سایت نمونه است و اطلاعات آن واقعی نیست.
          </p>
        </div>
      </div>
    </footer>
  );
}
