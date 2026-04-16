# Defra Outcomes Framework (accessible prototype)

This repository demonstrates that **an accessible version of the Defra Outcomes Framework**—proper headings, lists, expandable sections, and outcome owners in plain text—is **straightforward to publish** using the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/) and structured content. It contrasts with flipbook or image-heavy formats that are harder to use with assistive technology, search, and reflow.

It is also an **experiment** in how quickly a tool like **Cursor** can create a more accessible version of a policy-style document from **minimal prompts**.

## What’s here

- **`/outcomes`** — readable accordion page built from `app/data/outcomes.json` (owners, EIP notes, SoS pillars, resilience outcomes).
- **`/outcomes-static`** — non-accordion, hierarchy-first version for linear reading.
- **`content/`** — Markdown reference extracts and an **infographic** screenshot for visual hierarchy (`content/reference/defra-outcomes-framework-infographic.png`).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/outcomes](http://localhost:3000/outcomes).

## Deploy on Heroku

The kit is a **Node web app** (not static hosting). Deploy it as a standard Heroku web app.

1. **Build command:** `npm ci` (or `npm install` if preferred).
2. **Start command:** `npm start` (runs `govuk-prototype-kit start`, same as production serve).
3. **Config vars** in Heroku:
   - **`PASSWORD`** — **Required** in production. Set a strong secret and share it only with people who should open the prototype ([kit publishing guidance](https://prototype-kit.service.gov.uk/docs/publishing-on-the-web)).
   - **`USE_HTTPS`** = `false` — recommended if you see redirect-loop or proxy-related HTTPS issues.

Do **not** commit `PASSWORD` (or any secrets) to git.

## Licence

See `LICENCE.txt` (GOV.UK Prototype Kit starter licence). Confirm any Defra-specific content against official sources before wider publication.
