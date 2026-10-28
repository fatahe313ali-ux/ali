import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-800 text-cream-50 shadow-lg transition-all duration-400 hover:bg-gold-500 hover:shadow-xl ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="بازگشت به بالا"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
