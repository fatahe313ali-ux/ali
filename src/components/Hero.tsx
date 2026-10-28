import { CalendarHeart, MessageCircle, ChevronDown, Award, Sparkles } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '@/data/site';

const STATS = [
  { value: '۱۰+', label: 'سال تجربه' },
  { value: '۶', label: 'خدمت تخصصی' },
  { value: '۳', label: 'کارشناس مجرب' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="فضای آرامش‌بخش کلینیک زیبایی رخ‌سار"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* decorative gold corner accent */}
      <div className="absolute top-0 left-0 z-[5] h-32 w-32 border-t-2 border-l-2 border-gold-400/20 rounded-tr-none rounded-bl-none hidden md:block" />
      <div className="absolute bottom-0 right-0 z-[5] h-32 w-32 border-b-2 border-r-2 border-gold-400/20 hidden md:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 pb-20 md:px-8 lg:px-12 w-full">
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-charcoal-900/40 px-4 py-1.5 text-gold-300 text-xs font-medium backdrop-blur-md animate-fade-in"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {CLINIC_INFO.tagline}
          </span>

          <h1
            className="mt-7 text-cream-50 text-4xl font-bold leading-[1.25] text-balance sm:text-5xl lg:text-6xl animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            زیبایی طبیعی،
            <br className="hidden sm:block" />
            آغاز می‌شود از <span className="gold-gradient-text">رُخ‌سار</span>
          </h1>

          <p
            className="mt-6 text-cream-200/90 text-base leading-loose sm:text-lg max-w-xl animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            در محیطی آرام و حرفه‌ای، با مشاوره تخصصی و خدمات روز، پوست شما را به بهترین
            حالت خود می‌رسانیم. هر برنامه درمانی، متناسب با نیاز منحصربه‌فرد شما طراحی می‌شود.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#contact"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm"
            >
              <CalendarHeart className="h-5 w-5" aria-hidden="true" />
              رزرو نوبت مشاوره
            </a>
            <a
              href={CLINIC_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-200/30 bg-cream-50/5 px-8 py-4 text-cream-50 text-sm font-bold backdrop-blur-md hover:bg-cream-50/15 hover:border-cream-200/50 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              مشاوره در واتساپ
            </a>
          </div>

          <div
            className="mt-12 flex items-center gap-6 text-cream-200/80 text-sm animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="gold-gradient-text text-3xl font-bold">{stat.value}</span>
                  <span className="mt-0.5 text-cream-200/70 text-xs">{stat.label}</span>
                </div>
                {i < STATS.length - 1 && <div className="h-12 w-px bg-cream-200/20" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 pb-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-8 lg:px-12">
          <a
            href="#services"
            className="flex items-center gap-2 text-cream-200/60 text-xs font-medium hover:text-gold-400 transition-colors"
            aria-label="رفتن به بخش خدمات"
          >
            <span>مشاهده خدمات</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-200/20 animate-float">
              <ChevronDown className="h-4 w-4" />
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-2 text-cream-200/50 text-xs">
            <Award className="h-4 w-4 text-gold-400" aria-hidden="true" />
            <span>استانداردهای حرفه‌ای پوست و زیبایی</span>
          </div>
        </div>
      </div>
    </section>
  );
}
