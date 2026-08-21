# OWASP Top 10 Security Test Checklist

Last updated: 2026-08-23

## 1. Broken Access Control

### Tests
- [ ] Verify that unauthenticated users cannot access admin/dashboard routes
- [ ] Verify that users cannot access other users' data by changing IDs in URLs
- [ ] Verify that API endpoints enforce authorization on every request
- [ ] Verify that directory browsing is disabled
- [ ] Verify that file uploads are restricted to allowed types and sizes
- [ ] Verify that JWT tokens (if used) are properly validated
- [ ] Verify that CORS policies are properly configured

### Commands
```bash
# Check for exposed sensitive files
curl https://pp-edit1-overhaul.vercel.app/.env
curl https://pp-edit1-overhaul.vercel.app/.git/config
curl https://pp-edit1-overhaul.vercel.app/package.json

# Check for directory listing
curl https://pp-edit1-overhaul.vercel.app/src/
```

---

## 2. Cryptographic Failures

### Tests
- [ ] Verify all sensitive data is encrypted in transit (HTTPS enforced)
- [ ] Verify no sensitive data is stored in localStorage/sessionStorage without encryption
- [ ] Verify no hardcoded API keys, secrets, or passwords in source code
- [ ] Verify TLS 1.2+ is used (no TLS 1.0/1.1)
- [ ] Verify cipher suites are secure
- [ ] Verify HSTS header is set

### Commands
```bash
# Check for hardcoded secrets
grep -r "api_key\|secret\|password\|token\|private_key" src/ --include="*.ts" --include="*.tsx"

# Check HTTPS enforcement
curl -I https://pp-edit1-overhaul.vercel.app

# Check HSTS header
curl -I https://pp-edit1-overhaul.vercel.app | grep -i strict-transport-security
```

---

## 3. Injection

### Tests
- [ ] Verify all user inputs are sanitized before rendering
- [ ] Verify no `eval()`, `Function()`, or `setTimeout(string)` is used
- [ ] Verify no SQL injection vectors (if using databases)
- [ ] Verify no command injection vectors
- [ ] Verify no LDAP injection vectors
- [ ] Verify template literals are not used with untrusted input in dangerous contexts
- [ ] Verify `dangerouslySetInnerHTML` is not used with untrusted input (currently used in BlogPostPage)

### Commands
```bash
# Check for dangerous patterns
grep -r "eval\|Function\|setTimeout.*string\|setInterval.*string" src/ --include="*.ts" --include="*.tsx"

# Check for SQL queries
grep -r "SELECT\|INSERT\|UPDATE\|DELETE\|DROP" src/ --include="*.ts" --include="*.tsx"

# Check for hardcoded URLs with user input
grep -r "innerHTML\|dangerouslySetInnerHTML" src/ --include="*.ts" --include="*.tsx"
```

---

## 4. Insecure Design

### Tests
- [ ] Verify rate limiting is implemented for public endpoints
- [ ] Verify CAPTCHA or bot detection is in place for forms
- [ ] Verify no sensitive data is exposed in URL parameters
- [ ] Verify error messages don't leak sensitive information
- [ ] Verify proper input validation on all forms
- [ ] Verify business logic flaws are reviewed (e.g., price manipulation)

---

## 5. Security Misconfiguration

### Tests
- [ ] Verify default credentials are not used
- [ ] Verify unnecessary features/endpoints are disabled
- [ ] Verify security headers are set (CSP, X-Frame-Options, X-Content-Type-Options)
- [ ] Verify error messages don't expose stack traces in production
- [ ] Verify no debug mode in production
- [ ] Verify third-party dependencies are up to date
- [ ] Verify no unnecessary ports/services are exposed

### Commands
```bash
# Check for security headers
curl -I https://pp-edit1-overhaul.vercel.app | grep -i "x-frame-options\|x-content-type-options\|content-security-policy\|x-xss-protection"

# Check npm vulnerabilities
npm audit

# Check for debug mode
grep -r "process.env.NODE_ENV\|__DEV__\|debug" src/ --include="*.ts" --include="*.tsx"
```

---

## 6. Vulnerable and Outdated Components

### Tests
- [ ] Run `npm audit` and review all vulnerabilities
- [ ] Verify all dependencies are pinned to specific versions
- [ ] Verify no deprecated packages are used
- [ ] Verify Snyk or similar tool is configured (optional)
- [ ] Review changelog for critical security updates

### Commands
```bash
# Full dependency audit
npm audit

# Check for outdated packages
npm outdated

# Check for deprecated packages
npm ls --depth=0
```

---

## 7. Identification and Authentication Failures

### Tests
- [ ] Verify no weak password policies (if authentication exists)
- [ ] Verify no credential stuffing vulnerabilities
- [ ] Verify no session fixation vulnerabilities
- [ ] Verify session tokens are invalidated on logout
- [ ] Verify no user enumeration via login/error messages
- [ ] Verify multi-factor authentication is available (if applicable)

**Note:** Current site has no authentication system. This section is for future reference.

---

## 8. Software and Data Integrity Failures

### Tests
- [ ] Verify no unsigned/unverified third-party scripts are loaded
- [ ] Verify CI/CD pipeline has integrity checks
- [ ] Verify no insecure deserialization is used
- [ ] Verify no auto-update features without verification

### Commands
```bash
# Check for external scripts
grep -r "src=" src/ --include="*.ts" --include="*.tsx" | grep -v "plumbers-logo.png\|gardenImages"

# Check for unsafe third-party integrations
grep -r "dangerouslySetInnerHTML\|eval\|Function(" src/ --include="*.ts" --include="*.tsx"
```

---

## 9. Security Logging and Monitoring Failures

### Tests
- [ ] Verify error logging is configured (but doesn't expose sensitive data)
- [ ] Verify no sensitive data is logged to console in production
- [ ] Verify monitoring/alerting is set up
- [ ] Verify audit trails exist for critical actions

### Commands
```bash
# Check for console.log statements
grep -r "console.log\|console.debug\|console.warn" src/ --include="*.ts" --include="*.tsx"

# Check for error boundaries
grep -r "ErrorBoundary\|componentDidCatch\|getDerivedStateFromError" src/ --include="*.ts" --include="*.tsx"
```

---

## 10. Server-Side Request Forgery (SSRF)

### Tests
- [ ] Verify no user-controlled URLs are fetched server-side without validation
- [ ] Verify no internal network resources are accessible via user input
- [ ] Verify URL validation/whitelisting is implemented
- [ ] Verify no blind SSRF vectors exist

**Note:** Current site is static/client-side only. SSRF risk is minimal but should be reviewed if backend APIs are added.

---

## Quick Security Scan

### Automated Tools

```bash
# 1. npm audit - check for vulnerable dependencies
npm audit

# 2. npm audit fix - attempt to fix vulnerabilities
npm audit fix

# 3. Check for hardcoded secrets
grep -ri "password\|secret\|api_key\|token\|private_key" src/ --include="*.ts" --include="*.tsx" | grep -v "example\|placeholder\|REPLACE_WITH"

# 4. Check for dangerous eval patterns
grep -r "eval\|Function(\|setTimeout.*string\|setInterval.*string" src/ --include="*.ts" --include="*.tsx"

# 5. Check for dangerouslySetInnerHTML usage
grep -r "dangerouslySetInnerHTML" src/ --include="*.ts" --include="*.tsx"

# 6. Check for console.log statements
grep -r "console.log" src/ --include="*.ts" --include="*.tsx"
```

### Manual Review Checklist

- [ ] All external links use `rel="noopener noreferrer"` when opening in new tab
- [ ] All user-generated content is sanitized before rendering
- [ ] All API calls use HTTPS
- [ ] No sensitive data in URL fragments/query params
- [ ] Error boundaries wrap all page components
- [ ] No stack traces exposed in production UI
- [ ] Third-party scripts loaded from trusted CDNs only
- [ ] Subresource Integrity (SRI) used for critical third-party scripts

---

## Current Findings

### High Priority
_None identified yet._

### Medium Priority
_None identified yet._

### Low Priority / Informational
_None identified yet._

---

## Next Steps

1. Run full `npm audit` and review results
2. Replace all placeholder values in `index.html` (GA4, verification codes)
3. Review `dangerouslySetInnerHTML` usage in `BlogPostPage.tsx`
4. Add Content Security Policy headers
5. Set up error monitoring (Sentry/LogRocket)
6. Enable Vercel security headers
7. Review and remove any `console.log` statements before production
