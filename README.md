# Norway Card Advisor

Norway Card Advisor is a static website that helps Norwegian residents and
expats find the best credit cards, understand loan products and improve their
personal finances. Built with [Astro](https://astro.build/) and
[Tailwind CSS](https://tailwindcss.com/), it includes comparison tables,
interactive calculators, informative guides and a lightweight blog. The site is
100 % static – no server is required – so it can be hosted for free on
platforms like [Cloudflare Pages](https://pages.cloudflare.com/).

## Features

* **Credit card comparisons** – Data‑driven tables with detailed fees,
  interest rates and reward programs. Individual pages for each card and side‑by‑side comparison pages are generated from a JSON file (`src/data/cards.json`).
* **Calculators** – Mortgage and car‑loan calculators run entirely in the
  browser and never send data to a server.
* **Blog and guides** – Markdown content lives in `src/content/blog` and is
  rendered on the fly. You can manage posts through Decap CMS (see below).
* **Programmatic SEO pages** – A dynamic template generates a page for each
  card entry automatically.
* **GDPR compliance** – A cookie banner (vanilla-cookieconsent) and
  comprehensive privacy policy are included. Outbound affiliate clicks are
  tracked only if enabled via environment variables.
* **Analytics** – The code includes a placeholder for
  [Cloudflare Web Analytics](https://blog.cloudflare.com/cloudflare-web-analytics/) (no cookies) and easy integration of Google AdSense.

## Setup

1. **Install dependencies** (requires Node 18 or later):

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:4321/` to preview the site. Changes are
   automatically reloaded.

3. **Build for production**:

   ```bash
   npm run build
   ```

   The compiled site will be output to the `dist/` directory.

## Deploy to Cloudflare Pages

1. Create a new project at [Cloudflare Pages](https://pages.cloudflare.com/).
2. Connect your GitHub account and select the `mvp-zero-cost-website` repository.
3. Choose **None** as the framework preset. Set the build command to:

   ```bash
   npm run build
   ```

   Set the output directory to `dist`.
4. (Optional) Add environment variables in the **Build settings** tab:
   * `PUBLIC_ENABLE_ADS`: set to `true` to load Google AdSense; otherwise
     placeholder house ads will be shown.
   * `PUBLIC_ENABLE_AFFILIATE`: set to `true` to append affiliate tags to
     outbound card links.
5. Deploy the project. Cloudflare Pages will automatically build and
   publish your site to a free `pages.dev` subdomain.

## Content Management (Decap CMS)

This project includes [Decap CMS](https://decapcms.org/) so you can edit
blog posts without touching the code:

1. Navigate to `/admin` on your deployed site.
2. Log in with your GitHub account. The `config.yml` uses the GitHub
   backend and expects the repository name to be `mvp-zero-cost-website`.
3. Add or edit blog posts. Content is stored in `src/content/blog` and
   committed directly to the repository.

## Affiliate and Ads Configuration

To comply with advertising programs, the project includes placeholders for
Google AdSense and Nordic affiliate networks (Adtraction, Tradedoubler,
Awin Nordics, Amazon EU, etc.). These scripts load only if the relevant
environment variables are set at build time:

* **Google AdSense** – Set `PUBLIC_ENABLE_ADS` to `true` and replace
  `adsense_publisher_id` in `AdsPlaceholder.astro` with your AdSense ID.
* **Affiliate links** – Each card in `src/data/cards.json` has an
  `affiliate_url` field. Set `PUBLIC_ENABLE_AFFILIATE` to `true` to
  automatically append your affiliate tags; otherwise clean URLs are used.

Please read and comply with each program’s terms and disclose affiliate
relationships transparently.

## Development Notes

* Colors, typography and spacing are defined in `tailwind.config.cjs`. Feel
  free to tweak these values to match your brand.
* The `public/_headers` file sets basic security headers and caching
  directives. Customise it if you have specific hosting requirements.
* `public/sitemap.xml` contains placeholders for canonical URLs. Update the
  `<loc>` elements after you know your final domain.
* All AI‑generated images in `public/` are royalty‑free and released under
  CC0.

## License

This project is open‑sourced under the MIT License. See `LICENSES.md` for
third‑party asset information.