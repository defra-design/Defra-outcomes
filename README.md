# Defra Outcomes Framework (accessible prototype)

This repository demonstrates that **an accessible version of the Defra Outcomes Framework**—proper headings, lists, expandable sections, and outcome owners in plain text—is **straightforward to publish** using the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/) and structured content. It contrasts with flipbook or image-heavy formats that are harder to use with assistive technology, search, and reflow.

## What’s here

- **`/outcomes`** — readable page built from `app/data/outcomes.json` (owners, EIP notes, SoS pillars, resilience outcomes).
- **`content/`** — Markdown reference extracts and an **infographic** screenshot for visual hierarchy (`content/reference/defra-outcomes-framework-infographic.png`).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/outcomes](http://localhost:3000/outcomes).

## Deploy on Render

The kit is a **Node web app** (not static hosting). On [Render](https://render.com), use a **Web Service** wired to this repo.

1. **Build command:** `npm ci` (or `npm install` if you prefer). Avoid mixing **Yarn** with `package-lock.json` — Render may default to Yarn if no lockfile is detected; this repo includes `package-lock.json`, so npm is the right choice.
2. **Start command:** `npm start` (runs `govuk-prototype-kit start`, same as production serve).
3. **Environment variables** in the Render dashboard (**Environment** tab):
   - **`PASSWORD`** — **Required** in production. Set a strong secret and share it with people who should open the prototype ([kit publishing](https://prototype-kit.service.gov.uk/docs/publishing-on-the-web)). Without this you see “Password not set.”
   - **`USE_HTTPS`** = `false` — Recommended on Render so the app does not force HTTPS inside the container (TLS is already terminated at Render’s edge). You can set this in the dashboard *or* rely on `"useHttps": false` in `app/config.json` (this repo sets that by default).

Optional: use the included `render.yaml` as a Blueprint or copy its settings into an existing service. Do **not** commit `PASSWORD` to git—add it only in Render.

## Licence

See `LICENCE.txt` (GOV.UK Prototype Kit starter licence). Confirm any Defra-specific content against official sources before wider publication.
