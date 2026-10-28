import {
  Sparkles,
  Droplets,
  Waves,
  Gem,
  Smile,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react';

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'خانه', href: '#home' },
  { label: 'خدمات', href: '#services' },
  { label: 'درباره ما', href: '#about' },
  { label: 'تیم', href: '#team' },
  { label: 'گالری', href: '#gallery' },
  { label: 'سوالات', href: '#faq' },
  { label: 'تماس', href: '#contact' },
];

export const CLINIC_INFO = {
  name: 'رُخ‌سار',
  tagline: 'کلینیک تخصصی پوست و زیبایی',
  phone: '۰۲۱ ۲۲۰۰ ۴۴۰۰',
  phoneHref: 'tel:+982122004400',
  whatsapp: 'https://wa.me/989120000000',
  address: 'تهران، خیابان ولیعصر، بالاتر از پارک‌وی، ساختمان پزشکان رُخ‌سار، طبقه سوم',
  hours: [
    { day: 'شنبه تا چهارشنبه', time: '۱۰:۰۰ – ۱۹:۰۰' },
    { day: 'پنجشنبه', time: '۱۰:۰۰ – ۱۷:۰۰' },
    { day: 'جمعه و تعطیلات', time: 'تعطیل' },
  ],
  socials: {
    instagram: 'https://instagram.com/rokhsar.clinic',
    telegram: 'https://t.me/rokhsar_clinic',
  },
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: Sparkles,
    title: 'پاکسازی و مراقبت پوست',
    description:
      'پاکسازی عمیق پوست با روش‌های ملایم و متناسب با نوع پوست، برای روشن‌تر و شفاف‌تر شدن چهره.',
  },
  {
    icon: Droplets,
    title: 'آبرسانی و احیا پوست',
    description:
      'تزریق رطوبت و ویتامین‌های ضروری به لایه‌های پوست برای جوان‌سازی و افزایش طراوت.',
  },
  {
    icon: Waves,
    title: 'لیزر و روشن‌سازی',
    description:
      'استفاده از دستگاه‌های روز برای کاهش رنگدانه‌ها و یکدست‌سازی رنگ پوست با مشاوره تخصصی.',
  },
  {
    icon: Gem,
    title: 'مزوتراپی',
    description:
      'تزریق ترکیب ویتامین‌ها و مواد مغذی به پوست سر و صورت برای بهبود کیفیت و درخشش پوست.',
  },
  {
    icon: Smile,
    title: 'زیبایی و آرایش صورت',
    description: 'خدمات آرایش حرفه‌ای متناسب با فرم صورت و مناسبت شما، با محصولات باکیفیت.',
  },
  {
    icon: HeartPulse,
    title: 'ماساژ و آرام‌بخشی',
    description:
      'ماساژ و درمان‌های آرام‌بخش برای کاهش استرس و بازگرداندن شادابی به پوست و ذهن.',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const TEAM: TeamMember[] = [
  {
    name: 'نرگس محمدی',
    role: 'متخصص پوست و زیبایی',
    bio: 'بیش از ده سال تجربه در مراقبت از پوست و طراحی برنامه درمانی شخصی‌سازی‌شده.',
    image:
      'https://images.pexels.com/photos/29852852/pexels-photo-29852852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'سارا کاظمی',
    role: 'کارشناس لیزر و مزوتراپی',
    bio: 'متخصص استفاده از دستگاه‌های روز و ارائه مشاوره تخصصی برای هر نوع پوست.',
    image:
      'https://images.pexels.com/photos/7468194/pexels-photo-7468194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'مهسا رحیمی',
    role: 'آرایشگر حرفه‌ای صورت',
    bio: 'آرایشگر مجرب با تمرکز بر فرم‌بندی طبیعی و متناسب با چهره هر مراجع.',
    image:
      'https://images.pexels.com/photos/38197025/pexels-photo-38197025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQS: FaqItem[] = [
  {
    question: 'برای اولین مراجعه چه مدت زمانی باید رزرو کنم؟',
    answer:
      'اولین جلسه شامل مشاوره و بررسی پوست است و معمولاً ۴۵ تا ۶۰ دقیقه طول می‌کشد. توصیه می‌کنیم از طریق تلفن یا واتساپ نوبت رزرو کنید.',
  },
  {
    question: 'آیا برای مراجعه نیاز به نوبت قبلی است؟',
    answer:
      'بله، برای ارائه بهترین خدمات و کاهش زمان انتظار شما، مراجعه فقط با نوبت قبلی انجام می‌شود.',
  },
  {
    question: 'برای مراجعه چه چیزی همراه داشته باشم؟',
    answer:
      'کارت شناسایی و در صورت استفاده از محصولات درمانی خاص، فهرست محصولات فعلی پوست خود را به همراه داشته باشید.',
  },
  {
    question: 'آیا خدمات برای همه نوع پوست مناسب است؟',
    answer:
      'بله، پس از بررسی پوست توسط کارشناسان، برنامه متناسب با نوع و نیاز پوست شما طراحی می‌شود.',
  },
  {
    question: 'تسویه چه‌گونه انجام می‌شود؟',
    answer:
      'تسویه در محل به صورت نقدی یا کارت بانکی امکان‌پذیر است. هزینه هر خدمت پس از مشاوره اعلام می‌شود.',
  },
];

export const IMAGES = {
  hero: 'https://images.pexels.com/photos/6899542/pexels-photo-6899542.jpeg?auto=compress&cs=tinysrgb&w=1600',
  about:
    'https://images.pexels.com/photos/7446685/pexels-photo-7446685.jpeg?auto=compress&cs=tinysrgb&w=1200',
  service1:
    'https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&w=900',
  service2:
    'https://images.pexels.com/photos/7019463/pexels-photo-7019463.jpeg?auto=compress&cs=tinysrgb&w=900',
  gallery1:
    'https://images.pexels.com/photos/6899554/pexels-photo-6899554.jpeg?auto=compress&cs=tinysrgb&w=900',
  gallery2:
    'https://images.pexels.com/photos/7670694/pexels-photo-7670694.jpeg?auto=compress&cs=tinysrgb&w=900',
  gallery3:
    'https://images.pexels.com/photos/7750104/pexels-photo-7750104.jpeg?auto=compress&cs=tinysrgb&w=900',
  gallery4:
    'https://images.pexels.com/photos/39833690/pexels-photo-39833690.jpeg?auto=compress&cs=tinysrgb&w=900',
  gallery5:
    'https://images.pexels.com/photos/37240374/pexels-photo-37240374.jpeg?auto=compress&cs=tinysrgb&w=900',
  gallery6:
    'https://images.pexels.com/photos/6899543/pexels-photo-6899543.jpeg?auto=compress&cs=tinysrgb&w=900',
};

export type GalleryImage = { src: string; alt: string; span: string };

export const GALLERY: GalleryImage[] = [
  {
    src: IMAGES.gallery1,
    alt: 'فضای داخلی کلینیک زیبایی رخ‌سار',
    span: 'lg:row-span-2 lg:col-span-2',
  },
  {
    src: IMAGES.gallery5,
    alt: 'درمان صورت با ماسک آرام‌بخش در کلینیک رخ‌سار',
    span: '',
  },
  {
    src: IMAGES.gallery2,
    alt: 'محصولات مراقبت از پوست در کلینیک رخ‌سار',
    span: '',
  },
  {
    src: IMAGES.gallery3,
    alt: 'سالن مدرن کلینیک زیبایی رخ‌سار',
    span: 'lg:col-span-2',
  },
  {
    src: IMAGES.gallery6,
    alt: 'پذیرش و اتاق انتظار کلینیک رخ‌سار',
    span: '',
  },
  {
    src: IMAGES.gallery4,
    alt: 'فضای پذیرش کلینیک رخ‌سار',
    span: '',
  },
];
