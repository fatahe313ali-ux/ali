import { CalendarHeart, Phone } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '@/data/site';

export function CtaBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="reveal relative overflow-hidden rounded-3xl bg-charcoal-900 card-lux">
          <img
            src={IMAGES.gallery6}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-charcoal-900 via-charcoal-900/90 to-charcoal-900/50" />

          {/* gold accent border */}
          <div className="absolute top-0 inset-x-0 h-0.5 gold-line" />

          <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-14 text-center md:flex-row md:justify-between md:px-14 md:py-20 md:text-right">
            <div className="max-w-xl">
              <h2 className="text-cream-50 text-2xl font-bold leading-snug sm:text-3xl text-balance">
                آماده‌اید تا سفر شادابی پوستتان را آغاز کنید؟
              </h2>
              <p className="mt-4 text-cream-200/70 text-sm leading-loose sm:text-base">
                همین حالا نوبت رزرو کنید و از مشاوره تخصصی رایگان اولین مراجعه بهره‌مند شوید.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                href="#contact"
                className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm"
              >
                <CalendarHeart className="h-5 w-5" aria-hidden="true" />
                رزرو نوبت
              </a>
              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-200/25 px-8 py-4 text-cream-50 text-sm font-bold hover:bg-cream-50/10 hover:border-cream-200/40 transition-all duration-300"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
