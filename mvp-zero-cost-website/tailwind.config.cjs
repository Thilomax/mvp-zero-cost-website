/**
 * Tailwind CSS Configuration
 *
 * This file defines a custom colour palette and ensures that Tailwind
 * scans our Astro files, Markdown posts and components for utility
 * classes. The colours chosen here form part of the brand kit for
 * the site: a dark blue primary shade paired with emerald and light
 * gray for accents.
 */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366',
          light: '#1D4F91',
          dark: '#002244',
        },
        accent: {
          DEFAULT: '#067c64',
          light: '#1FA78E',
          dark: '#03644F',
        },
        neutral: {
          light: '#F5F8FA',
          DEFAULT: '#E1E8ED',
          dark: '#64748B',
        },
      },
    },
  },
  plugins: [],
};