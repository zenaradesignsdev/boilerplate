# [Client Name] — Project Context
# .claude/CLAUDE.md | Project-level Claude instructions

---

## Client

- **Name**: [Client Name]
- **Industry**: [e.g. Law firm / Accounting / Financial advisory]
- **Website**: [domain.com]
- **Primary contact**: [name, email]

---

## Design Personality

<!-- Required before writing any components. Example: -->
<!-- "Authoritative and minimal — premium Bay Street law firm brochure aesthetic.
      Heavy use of whitespace, serif display type, muted stone palette." -->

[Define the design direction here]

---

## Colour Palette

Update `--brand`, `--brand-foreground`, `--brand-muted` in `src/app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `--brand` | `hsl(...)` | Primary CTAs, links |
| `--brand-foreground` | `hsl(...)` | Text on brand bg |
| `--brand-muted` | `hsl(...)` | Subtle tints |

---

## Typography

Update `src/lib/fonts.ts`.

| Role | Font | Weight |
|---|---|---|
| Display (`--font-display`) | [Font name] | 400, 600 |
| Body (`--font-sans`) | [Font name] | 400, 500 |

---

## CMS

- **Platform**: [None / Sanity / Contentful / other]
- **Config**: [Link to CMS project or notes]

---

## Pages

- [ ] Home (`/`)
- [ ] Contact (`/contact`)
- [ ] [Add pages as defined]

---

## Content & Copy

- **Tone**: [e.g. Formal, warm, authoritative]
- **Never say**: [e.g. "innovative", "cutting-edge", client's competitor names]
- **Preferred terms**: [e.g. "matters" not "cases" for this firm]

---

## Images

- Use `<Image />` from `@/components/ui/image` for all rendered images — never raw `<img>`
- Provide `sizes` for any image wider than 640px to avoid the browser fetching the largest srcset variant:
  ```tsx
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
  ```
- Set `priority` on the largest above-the-fold image per page (LCP element)
- For blur placeholders: add `plaiceholder` + run it at build time to get a `blurDataURL`, then pass it to the component — `placeholder="blur"` activates automatically
- OG image: keep a `1200×630` asset at `public/og-image.jpg` and reference it in `siteConfig.ogImage` — it is never rendered via `<Image />`

---

## Stack Additions

List any dependencies added beyond the boilerplate:

| Package | Reason |
|---|---|
| | |

---

## Environment Variables

Actual values are in Vercel dashboard — never committed.
See `.env.local.example` for required keys.

- `RESEND_API_KEY` — Resend account (check 1Password)
- `CONTACT_TO_EMAIL` — [email address]
- `NEXT_PUBLIC_SITE_URL` — [https://domain.com]

---

## Notes

<!-- Any project-specific gotchas, client preferences, or constraints -->
