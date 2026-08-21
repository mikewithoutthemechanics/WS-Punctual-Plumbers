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

- [ ] Add Content Security Policy headers (CSP, X-Frame-Options, X-Content-Type-Options)
- [ ] Add React error boundaries for graceful error handling
- [ ] Add Subresource Integrity (SRI) for Google Fonts
- [ ] Run `npm audit fix --force` to update vulnerable dev dependencies (esbuild, vite)
- [ ] Review and restrict CORS policy if backend API is added
- [ ] Add error monitoring (Sentry, LogRocket, etc.)
- [ ] Complete manual security review of all third-party integrations
- [ ] Verify no sensitive data in client-side storage (localStorage, sessionStorage)
- [ ] Add rate limiting / bot detection if forms are added
- [ ] Review and minimize `dangerouslySetInnerHTML` usage (currently safe, hardcoded only)

## General Outstanding

- [ ] Review and update all placeholder content (company reg number, etc.)
- [ ] Add real company logo image (`/plumbers-logo.png`)
- [ ] Test all routes in production after deployment
- [ ] Verify mobile responsiveness on real devices
- [ ] Check page speed / Core Web Vitals
- [ ] Add error monitoring (Sentry, LogRocket, etc.)