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
- [ ] Add Subresource Integrity (SRI) for Google Fonts — **COMPLETED** (SRI hash added to index.html)
- [x] Run `npm audit fix` to update vulnerable dev dependencies — **COMPLETED** (0 vulnerabilities remaining)
- [ ] Review and restrict CORS policy if backend API is added — **FUTURE**
- [ ] Add error monitoring (Sentry, LogRocket, etc.) — **TODO**
- [ ] Complete manual security review of all third-party integrations — **TODO**
- [ ] Verify no sensitive data in client-side storage (localStorage, sessionStorage) — **TODO**
- [ ] Add rate limiting / bot detection if forms are added — **TODO**
- [ ] Review and minimize `dangerouslySetInnerHTML` usage (currently safe, hardcoded only) — **LOW RISK**

## General Outstanding

- [ ] Review and update all placeholder content (company reg number, etc.)
- [ ] Add real company logo image (`/plumbers-logo.png`)
- [ ] Test all routes in production after deployment
- [ ] Verify mobile responsiveness on real devices
- [ ] Check page speed / Core Web Vitals
- [ ] Add error monitoring (Sentry, LogRocket, etc.)