import { Camera } from 'lucide-react';
import { GALLERY } from '@/data/site';

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 lg:py-32 bg-cream-200/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold tracking-persian-wider">
            <span className="h-px w-6 bg-gold-500" />
            گالری
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <h2 className="mt-4 text-charcoal-800 text-3xl font-bold leading-snug sm:text-4xl text-balance">
            فضای کلینیک رخ‌سار
          </h2>
          <p className="mt-5 text-charcoal-700/60 text-sm leading-loose sm:text-base">
            محیطی آرام و حرفه‌ای که تجربه مراجعه به کلینیک زیبایی را برایتان لذت‌بخش می‌کند.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[230px]">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl card-lux ${img.span}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 right-4 flex items-center gap-2 text-cream-50 text-xs font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                <Camera className="h-4 w-4 text-gold-400" aria-hidden="true" />
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
