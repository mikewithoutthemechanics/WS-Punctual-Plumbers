# Outstanding Items

Last updated: 2026-08-23

## SEO / AEO Outstanding

- [ ] Replace `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` in `index.html`
- [ ] Replace `REPLACE_WITH_BING_WEBMASTER_VERIFICATION_CODE` in `index.html`
- [ ] Replace `G-REPLACE_WITH_GA4_MEASUREMENT_ID` in `index.html` with actual GA4 Measurement ID
- [ ] Verify `sitemap.xml` is accessible at `/sitemap.xml`
- [ ] Verify `robots.txt` is accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Add individual blog post `Article` / `BlogPosting` schema with real publish dates
- [ ] Add `HowTo` schema markup validation for water calculator
- [ ] Add Google Analytics 4 tracking verification in production
- [ ] Add Bing Webmaster Tools verification in production

## Security / OWASP Outstanding

- [x] Add Content Security Policy headers (CSP, X-Frame-Options, X-Content-Type-Options) — **COMPLETED via vercel.json**
- [x] Add React error boundaries for graceful error handling — **COMPLETED**
- [x] Add Subresource Integrity (SRI) for Google Fonts — **COMPLETED** (SRI hash added to index.html, inline @import removed from App.tsx)
- [x] Run `npm audit fix --force` to update vulnerable dev dependencies — **COMPLETED** (0 vulnerabilities remaining)
- [ ] Review and restrict CORS policy if backend API is added — **FUTURE**
- [ ] Add error monitoring (Sentry, LogRocket, etc.) — **TODO**
- [ ] Complete manual security review of all third-party integrations — **TODO**
- [ ] Verify no sensitive data in client-side storage (localStorage, sessionStorage) — **TODO**
- [ ] Add rate limiting / bot detection if forms are added — **TODO**
- [ ] Review and minimize `dangerouslySetInnerHTML` usage (currently safe, hardcoded only) — **LOW RISK**

## AEO / SEO / Monitoring Outstanding

- [x] Add Content Security Policy (CSP) — **COMPLETED**
- [x] Add Vercel Speed Insights for Core Web Vitals monitoring — **COMPLETED**
- [x] Update `framer-motion` to 12.43.0 — **COMPLETED**
- [x] Update `tailwindcss` to 4.3.3 — **COMPLETED**
- [x] Verify `robots.txt` exists and is correct — **COMPLETED**
- [x] Verify `sitemap.xml` exists and is correct — **COMPLETED**
- [ ] Verify mobile responsiveness on real devices — **TODO**
- [ ] Run Lighthouse / Core Web Vitals audit on production — **TODO**

## General Outstanding

- [ ] Review and update all placeholder content (company reg number, etc.)
- [ ] Add real company logo image (`/plumbers-logo.png`)
- [ ] Test all routes in production after deployment