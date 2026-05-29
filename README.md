# Jeremy Cacho Portfolio

This is a Vercel-ready Next.js portfolio for OJT use.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Keep the default settings. Vercel will detect Next.js automatically.

## Notes

- Replace the portrait placeholder with your actual photo if you want a more personal hero section.
- Update the email, GitHub, and LinkedIn links in the contact section before publishing.

## Troubleshooting: missing module like './833.js'

If you see a runtime or build error complaining about a missing module under `.next` (for example, "Cannot find module './833.js'"), it usually means the framework's build output got stale. To fix it locally run:

```bash
npm run clean
npm run build
```

This removes the `.next` folder and forces a fresh production build which resolves the missing chunk in most cases.