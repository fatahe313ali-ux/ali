import { ArrowLeft } from 'lucide-react';
import { SERVICES, type Service } from '@/data/site';

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <div
      className="reveal card-lux card-lux-hover group relative rounded-2xl bg-cream-50 border border-cream-300/50 p-7 hover:border-gold-300 hover:-translate-y-1.5"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* number badge */}
      <span className="absolute top-6 left-6 text-5xl font-bold text-cream-300/70 select-none transition-colors duration-300 group-hover:text-gold-200/80">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-600/5 text-gold-600 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-cream-50 group-hover:shadow-lg group-hover:shadow-gold-600/20">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      <h3 className="relative mt-5 text-charcoal-800 text-lg font-bold leading-snug">
        {service.title}
      </h3>
      <p className="relative mt-2.5 text-charcoal-700/70 text-sm leading-loose">
        {service.description}
      </p>

      <a
        href="#contact"
        className="relative mt-5 inline-flex items-center gap-1.5 text-gold-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-2.5"
      >
        رزرو این خدمت
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold tracking-persian-wider">
            <span className="h-px w-6 bg-gold-500" />
            خدمات ما
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <h2 className="mt-4 text-charcoal-800 text-3xl font-bold leading-snug sm:text-4xl text-balance">
            خدمات تخصصی برای مراقبت از پوست شما
          </h2>
          <p className="mt-5 text-charcoal-700/60 text-sm leading-loose sm:text-base">
            هر خدمت با مشاوره تخصصی و پس از بررسی وضعیت پوست شما ارائه می‌شود تا نتیجه‌ای
            ایمن و رضایت‌بخش دریافت کنید.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
