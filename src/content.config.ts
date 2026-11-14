import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string().optional(),
    description: z.string(),
    urlSlug: z.string(),
    translationKey: z.string(),
    eyebrow: z.string().optional(),
    hero: z
      .object({
        heading: z.string(),
        subheading: z.string(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
      })
      .optional(),
    seoTitle: z.string().optional(),
    noindex: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    translationKey: z.string(),
    summary: z.string(),
    duration: z.string(),
    price: z.string(),
    order: z.number().default(0),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ base: './src/content/faqs', pattern: '**/*.md' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: './src/content/testimonials', pattern: '**/*.md' }),
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    location: z.string().optional(),
    service: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    order: z.number().default(0),
  }),
});

export const collections = { pages, services, faqs, testimonials };
