import { Instagram, MessageCircle } from 'lucide-react';
import { TEAM, CLINIC_INFO } from '@/data/site';

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold tracking-persian-wider">
            <span className="h-px w-6 bg-gold-500" />
            تیم ما
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <h2 className="mt-4 text-charcoal-800 text-3xl font-bold leading-snug sm:text-4xl text-balance">
            کارشناسان مجرب رُخ‌سار
          </h2>
          <p className="mt-5 text-charcoal-700/60 text-sm leading-loose sm:text-base">
            تیمی که با دانش، تجربه و دلسوزی در کنار شماست تا بهترین نتیجه را دریافت کنید.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <article
              key={member.name}
              className="reveal card-lux card-lux-hover group overflow-hidden rounded-3xl bg-cream-50 border border-cream-300/50 hover:border-gold-300"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* social icons on hover */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <a
                    href={CLINIC_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`اینستاگرام ${member.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/90 text-charcoal-800 hover:bg-gold-500 hover:text-cream-50 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href={CLINIC_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`واتساپ ${member.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/90 text-charcoal-800 hover:bg-gold-500 hover:text-cream-50 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-charcoal-800 text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-gold-600 text-sm font-medium">{member.role}</p>
                <div className="mt-3 h-px w-10 bg-gold-300" />
                <p className="mt-3 text-charcoal-700/70 text-sm leading-loose">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
