# 🔐 Security Policy

Thank you for helping to secure OmniSocial Hub! We take security seriously and appreciate your efforts to responsibly disclose any vulnerabilities.

---

## 📬 Reporting a Vulnerability

If you discover a security issue or vulnerability:

1. **Do not** open a public GitHub issue.
2. Email the core maintainers directly: **security@circuitryhub.org**
3. Include:
   - A description of the issue
   - Steps to reproduce
   - Any logs or screenshots if applicable
   - Your contact info for follow-up

We will respond within **72 hours** and aim to resolve confirmed issues within **7–14 days**.

---

## ✅ Supported Versions

| Version       | Status     |
|---------------|------------|
| `main` branch | ✅ Actively supported |
| `release/*`   | 🟡 Supported during stabilization |

---

## 🔐 Security Best Practices

For contributors and self-hosters:

- Never commit API keys or tokens
- Use `.env` files and add them to `.gitignore`
- Enable 2FA on GitHub accounts
- Use `npm audit` or `yarn audit` regularly
- Monitor Dockerfile and dependencies with [Dependabot](https://github.com/beitmenotyou-com/omnisocial-hub/network/alerts)

---

## 🛡️ Security Features (Enabled)

- ✅ GitHub Secret Scanning
- ✅ Dependabot Alerts (via GitHub Security tab)
- ✅ Security advisories (via GitHub Advisories if applicable)

---

## 📄 Resources

- [Node.js Security Guidelines](https://nodejs.org/en/security/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [npm Security Docs](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)

---

Thank you for keeping the OmniSocial Hub community safe and secure!
