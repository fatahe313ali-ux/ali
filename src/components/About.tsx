import { Check, Sparkles, Quote } from 'lucide-react';
import { IMAGES } from '@/data/site';

const POINTS = [
  'مشاوره تخصصی و رایگان در اولین مراجعه',
  'برنامه درمانی شخصی‌سازی‌شده برای هر نوع پوست',
  'محصولات باکیفیت و استاندارد',
  'محیطی آرام و کاملاً بهداشتی',
  'تیم مجرب و آموزش‌دیده',
  'پیگیری و پشتیبانی پس از خدمات',
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-cream-200/40 relative overflow-hidden">
      {/* decorative blur circle */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            {/* gold frame accent */}
            <div className="absolute -top-3 -right-3 h-full w-full rounded-3xl border border-gold-400/30 hidden sm:block" />
            <img
              src={IMAGES.about}
              alt="ارائه خدمات مراقبت از پوست در کلینیک رخ‌سار"
              className="relative rounded-3xl object-cover shadow-xl w-full aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-7 -left-4 hidden sm:flex items-center gap-3.5 rounded-2xl bg-charcoal-900 px-6 py-4 shadow-xl">
              <Sparkles className="h-7 w-7 text-gold-400 flex-none" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="text-cream-50 text-sm font-bold">تجربه‌ای متفاوت</span>
                <span className="text-cream-200/60 text-xs mt-0.5">مراقبت حرفه‌ای از پوست</span>
              </div>
            </div>
          </div>

          <div className="reveal">
            <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold tracking-persian-wider">
              <span className="h-px w-6 bg-gold-500" />
              درباره رُخ‌سار
            </span>
            <h2 className="mt-4 text-charcoal-800 text-3xl font-bold leading-snug sm:text-4xl text-balance">
              جایی که زیبایی و علم در کنار هم می‌نشینند
            </h2>
            <p className="mt-6 text-charcoal-700/80 text-sm leading-loose sm:text-base">
              کلینیک رُخ‌سار با هدف ارائه خدمات حرفه‌ای پوست و زیبایی در محیطی آرام و
              مطمئن تأسیس شده است. ما با تکیه بر دانش روز و تجهیزات مدرن، در کنار تیمی مجرب،
              تجربه‌ای لذت‌بخش و نتیجه‌ای رضایت‌بخش برای شما رقم می‌زنیم.
            </p>

            <div className="mt-6 rounded-2xl border-r-2 border-gold-500 bg-cream-50/60 px-5 py-4">
              <Quote className="h-5 w-5 text-gold-400 mb-2" aria-hidden="true" />
              <p className="text-charcoal-700/90 text-sm leading-loose italic">
                در رُخ‌سار، هر مراجع مهمان ماست و هر برنامه درمانی، آغاز یک مسیر شادابی است.
              </p>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-charcoal-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-charcoal-800 px-8 py-3.5 text-cream-50 text-sm font-bold hover:bg-charcoal-900 hover:shadow-lg transition-all duration-300"
            >
              رزرو مشاوره
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
