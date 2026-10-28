import { useEffect, useState } from 'react';
import { Menu, X, Phone, CalendarHeart } from 'lucide-react';
import { NAV_LINKS, CLINIC_INFO } from '@/data/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  const navTextClass = scrolled ? 'text-charcoal-700' : 'text-cream-50';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-md border-b border-gold-300/40'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <a
          href="#home"
          onClick={close}
          className="flex items-center gap-2.5"
          aria-label="کلینیک رخ‌سار، بازگشت به خانه"
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full border text-lg font-bold transition-colors duration-500 ${
              scrolled
                ? 'border-gold-500 bg-gold-500/5 text-gold-600'
                : 'border-gold-400/60 bg-charcoal-900/20 text-gold-300 backdrop-blur-sm'
            }`}
          >
            ر
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`text-lg font-bold transition-colors duration-500 ${
                scrolled ? 'text-charcoal-800' : 'text-cream-50'
              }`}
            >
              رُخ‌سار
            </span>
            <span
              className={`mt-0.5 text-[10px] font-medium tracking-persian-wider transition-colors duration-500 ${
                scrolled ? 'text-gold-600' : 'text-gold-300'
              }`}
            >
              کلینیک پوست و زیبایی
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="ناوبری اصلی">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                active === link.href
                  ? scrolled
                    ? 'bg-gold-500/10 text-gold-700'
                    : 'bg-cream-50/10 text-gold-300'
                  : `${navTextClass} hover:text-gold-500`
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={CLINIC_INFO.phoneHref}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              scrolled
                ? 'border-gold-500/50 text-charcoal-800 hover:bg-gold-500 hover:text-cream-50'
                : 'border-cream-200/30 text-cream-50 hover:bg-cream-50/10'
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span dir="ltr">{CLINIC_INFO.phone}</span>
          </a>
          <a
            href="#contact"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
          >
            <CalendarHeart className="h-4 w-4" aria-hidden="true" />
            رزرو نوبت
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
            scrolled ? 'text-charcoal-800 hover:bg-cream-200' : 'text-cream-50 hover:bg-cream-50/10'
          }`}
          aria-label={open ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-gold-300/30 bg-cream-50 shadow-lg transition-all duration-300 ${
          open ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-0.5 px-4 py-4"
          aria-label="ناوبری موبایل"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={`rounded-xl px-3.5 py-3 text-sm font-medium transition-colors ${
                active === link.href
                  ? 'bg-gold-500/10 text-gold-700'
                  : 'text-charcoal-700 hover:bg-cream-200'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="btn-gold mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm"
          >
            <CalendarHeart className="h-5 w-5" aria-hidden="true" />
            رزرو نوبت
          </a>
        </nav>
      </div>
    </header>
  );
}
