# Project Handover

## Quick‑Start Checklist (≈30 minutes)

1. **Clone the repository** from GitHub or download the ZIP and extract it.
2. **Install Node dependencies**:
   ```bash
   cd mvp-zero-cost-website
   npm install
   ```
3. **Run locally** to verify everything works:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.
4. **Update branding**:
   * Replace the placeholder analytics token in `src/layouts/BaseLayout.astro`.
   * Edit `tailwind.config.cjs` if you want to change colours.
   * Swap out the AI‑generated logo in `public/logo.png` if desired.
5. **Configure affiliate and ad scripts**:
   * Populate `src/data/cards.json` with your own affiliate URLs.
   * Set `PUBLIC_ENABLE_ADS` and `PUBLIC_ENABLE_AFFILIATE` environment variables when building/deploying.
6. **Deploy to Cloudflare Pages** following the steps in `README.md`.
7. **Verify pages** (especially dynamic card pages and calculators) and test on mobile.
8. **Submit the site to Google Search Console** and request indexing of your sitemap at `/sitemap.xml`.

## Growth & Marketing Plan (4 Weeks)

**Week 1: Launch & Indexing**
* Push the repository to GitHub and deploy on Cloudflare Pages.
* Add your site to Google Search Console and Bing Webmaster Tools.
* Submit sitemap and ensure robots.txt is correct.
* Set up Cloudflare Web Analytics; begin collecting baseline traffic data.

**Week 2: Content Seeding & Outreach**
* Publish at least five new blog posts targeting long‑tail keywords from the keyword map (see `keyword_map.csv`).
* Share articles on relevant Facebook and LinkedIn groups about personal finance in Norway.
* Reach out to Norwegian personal finance bloggers for backlinks and guest post exchanges.

**Week 3: SEO & Performance Optimisation**
* Review Google Search Console for crawl errors and fix them.
* Optimise on‑page SEO: ensure H1 headings, meta descriptions and image ALT tags are present.
* Use PageSpeed Insights to confirm Core Web Vitals scores remain above 90.
* Implement internal linking between related posts to spread link equity.

**Week 4: Monetisation & Scale**
* Apply for Nordic affiliate programs (Adtraction, Tradedoubler, Awin, Amazon EU). Once approved, enable `PUBLIC_ENABLE_AFFILIATE` and insert your tracking parameters.
* Apply for Google AdSense using the site’s traffic metrics. Once approved, switch the house ads to live ads.
* Build an email capture strategy: integrate a free email marketing tool (e.g. MailerLite) and send a welcome sequence offering a free finance checklist.
* Plan the next month’s content focusing on seasonal topics (e.g. holiday travel credit cards, tax deductions) and update the programmatic data (cards and rates).

## Next 20 Content Ideas & Outlines

1. **Best credit cards for freelancers in Norway** – Evaluate cards with business expenses and integration with accounting tools.
2. **How to avoid foreign transaction fees when travelling** – Tips and card recommendations.
3. **Guide to student bank accounts and budgeting** – Compare student packages from major banks.
4. **Cashback vs travel rewards: which is better for Norwegians?** – Use case scenarios.
5. **Visa vs Mastercard: acceptance and benefits in Norway** – Where each network is stronger.
6. **How to build credit as an immigrant in Norway** – Steps and common pitfalls.
7. **Ultimate packing list for a winter trip to the fjords** – Include affiliate links to gear.
8. **Car leasing vs car loan: which should you choose?** – Finance comparison with calculators.
9. **How to consolidate debt with low‑interest cards** – Strategies and card suggestions.
10. **Nordic travel insurance explained** – What’s covered and best policy providers.
11. **Review of digital banks in Norway** – Pros, cons and account opening process.
12. **Programmatic page: compare interest rates by credit score bracket** – Data‑driven table.
13. **Guide to using Apple Pay and Google Pay in Norway** – Setup instructions and compatible banks.
14. **What affects your credit score in Norway?** – Factors and how to improve them.
15. **How to transfer money abroad cheaply** – Evaluate transfer services and card fees.
16. **Annual fee credit cards: are they worth it?** – Analysis with example calculations.
17. **Camping and outdoor gear checklist for Norwegian summer** – Affiliate products.
18. **How to save for a down payment quickly** – Budgeting hacks and savings accounts.
19. **Electric car incentives in Norway and financing options** – Incentives and loan calculators.
20. **Understanding balance transfer offers** – When to use them and the fine print.