import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS, type FaqItem } from '@/data/site';

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl bg-cream-50 border overflow-hidden transition-all duration-300 ${
        open ? 'border-gold-300 shadow-md' : 'border-cream-300/50'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-right"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <HelpCircle
            className={`h-5 w-5 flex-none transition-colors duration-300 ${
              open ? 'text-gold-600' : 'text-gold-400/60'
            }`}
            aria-hidden="true"
          />
          <span className="text-charcoal-800 text-sm font-bold sm:text-base">{item.question}</span>
        </span>
        <span
          className={`flex h-7 w-7 flex-none items-center justify-center rounded-full transition-all duration-300 ${
            open ? 'bg-gold-500/10 rotate-180' : 'bg-cream-200'
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-colors duration-300 ${
              open ? 'text-gold-600' : 'text-charcoal-700/50'
            }`}
            aria-hidden="true"
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pr-13 px-5 pb-5 text-charcoal-700/70 text-sm leading-loose">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-cream-200/40">
      <div className="mx-auto max-w-3xl px-5 md:px-8 lg:px-12">
        <div className="reveal text-center">
          <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold tracking-persian-wider">
            <span className="h-px w-6 bg-gold-500" />
            سوالات متداول
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <h2 className="mt-4 text-charcoal-800 text-3xl font-bold leading-snug sm:text-4xl text-balance">
            پاسخ به پرسش‌های شما
          </h2>
          <p className="mt-5 text-charcoal-700/60 text-sm leading-loose sm:text-base">
            اگر سوال دیگری دارید، از طریق تلفن یا واتساپ با ما در تماس باشید.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((item) => (
            <div key={item.question} className="reveal">
              <FaqRow item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
