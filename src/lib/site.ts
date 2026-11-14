import type { CollectionEntry } from 'astro:content';

export const locales = ['en', 'nl'] as const;
export type Lang = (typeof locales)[number];
export type PageEntry = CollectionEntry<'pages'>;

export const mainNavKeys = [
  'home',
  'about',
  'hypnotherapy',
  'services',
  'pricing',
  'contact',
] as const;

export const footerNavKeys = [
  'about',
  'hypnotherapy',
  'services',
  'conditions',
  'process',
  'pricing',
  'faq',
  'testimonials',
  'booking',
  'contact',
  'privacy',
  'terms',
] as const;

export function langFromId(id: string): Lang {
  return id.startsWith('nl/') ? 'nl' : 'en';
}

export function slugFromId(id: string): string {
  return id.split('/').slice(1).join('/');
}

export function pagePath(lang: Lang, slug: string, translationKey?: string): string {
  if (translationKey === 'home' || slug === 'home') {
    return lang === 'nl' ? '/nl/' : '/';
  }
  return lang === 'nl' ? `/nl/${slug}/` : `/${slug}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'nl' : 'en';
}
