import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Check, Send, CalendarHeart } from 'lucide-react';
import { CLINIC_INFO } from '@/data/site';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold tracking-persian-wider">
            <span className="h-px w-6 bg-gold-500" />
            تماس با ما
            <span className="h-px w-6 bg-gold-500" />
          </span>
          <h2 className="mt-4 text-charcoal-800 text-3xl font-bold leading-snug sm:text-4xl text-balance">
            نوبت خود را رزرو کنید
          </h2>
          <p className="mt-5 text-charcoal-700/60 text-sm leading-loose sm:text-base">
            برای رزرو نوبت یا مشاوره، فرم زیر را پر کنید یا مستقیم با ما تماس بگیرید.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="reveal space-y-4">
            <a
              href={CLINIC_INFO.phoneHref}
              className="card-lux card-lux-hover flex items-center gap-4 rounded-2xl bg-cream-50 border border-cream-300/50 p-5 hover:border-gold-300 group"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gold-500/10 text-gold-600 group-hover:bg-gold-500 group-hover:text-cream-50 transition-colors duration-300">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-charcoal-700/50 text-xs">تلفن کلینیک</span>
                <span className="text-charcoal-800 text-base font-bold mt-0.5" dir="ltr">
                  {CLINIC_INFO.phone}
                </span>
              </div>
            </a>

            <div className="card-lux flex items-start gap-4 rounded-2xl bg-cream-50 border border-cream-300/50 p-5">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gold-500/10 text-gold-600">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-charcoal-700/50 text-xs">نشانی</span>
                <span className="text-charcoal-800 text-sm font-medium leading-loose mt-0.5">
                  {CLINIC_INFO.address}
                </span>
              </div>
            </div>

            <div className="card-lux flex items-start gap-4 rounded-2xl bg-cream-50 border border-cream-300/50 p-5">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gold-500/10 text-gold-600">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex w-full flex-col">
                <span className="text-charcoal-700/50 text-xs">ساعات کاری</span>
                <ul className="mt-3 space-y-2">
                  {CLINIC_INFO.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm border-b border-cream-200/50 pb-2 last:border-0">
                      <span className="text-charcoal-800 font-medium">{h.day}</span>
                      <span className="text-charcoal-700/70">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={CLINIC_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-white text-sm font-bold hover:bg-[#1EBE5D] hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              گفتگو در واتساپ
            </a>
          </div>

          <div className="reveal relative rounded-3xl bg-charcoal-900 p-6 sm:p-8 shadow-xl overflow-hidden">
            {/* gold accent */}
            <div className="absolute top-0 inset-x-0 h-0.5 gold-line" />

            <h3 className="text-cream-50 text-xl font-bold flex items-center gap-2">
              <CalendarHeart className="h-5 w-5 text-gold-400" aria-hidden="true" />
              فرم رزرو نوبت
            </h3>
            <p className="mt-2 text-cream-200/60 text-sm leading-relaxed">
              پس از تکمیل فرم، کارشناسان ما در اولین فرصت با شما تماس می‌گیرند.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label htmlFor="name" className="block text-cream-200/80 text-xs font-medium mb-2">
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-lux w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-cream-200/30"
                  placeholder="مثال: مریم احمدی"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-cream-200/80 text-xs font-medium mb-2">
                  شماره تماس
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input-lux w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-cream-200/30"
                  placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cream-200/80 text-xs font-medium mb-2">
                  توضیحات (اختیاری)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-lux w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-cream-200/30 resize-none"
                  placeholder="خدمت موردنظر یا زمان دلخواه خود را بنویسید."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-gold flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <Check className="h-5 w-5" aria-hidden="true" />
                    درخواست شما ثبت شد
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" aria-hidden="true" />
                    ثبت درخواست
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
