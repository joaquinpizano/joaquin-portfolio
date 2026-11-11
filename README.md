# Joaquin Pizano — Personal Portfolio

Existing Next.js 16 / TypeScript portfolio, finalized without changing the cream and forest-green identity. Vercel deployment and domain purchase remain deferred. GitHub publication is authorized separately. RiskMap and PharmaOpt source repositories were read only.

## Preview locally

With Node.js 22 LTS installed:

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Stop with Ctrl+C. If port 3000 is occupied, use `npm run dev -- --port 3001` and open http://127.0.0.1:3001.

This machine also has a temporary ignored runtime. Run `powershell -ExecutionPolicy Bypass -File .\preview.ps1` to use it. That helper is not needed on Vercel or machines with Node installed.

```powershell
npm run typecheck
npm run build
npm start
```

## Content and project structure

- `data/portfolio.ts`: personal information, experience dates, skills, project copy, and sourced chart/planner constants.
- `app/page.tsx`: existing homepage and first-person introduction.
- `app/projects/[slug]/page.tsx`: shared project case-study layout and metadata.
- `components/ProjectVisual.tsx`: evidence-based project covers, replacing conceptual charts.
- `components/Pipeline.tsx`: accessible responsive methodology diagrams.
- `components/RiskEvidence.tsx`: geographic coverage, policyCount reconciliation, and provisional exposure sensitivity.
- `components/PharmaEvidence.tsx`: corrected model comparison and limitations.
- `components/BudgetPlanner.tsx`: client-side illustrative planner with input validation, team limit, and accessible results.
- `app/globals.css`: original visual design plus responsive evidence components.
- `app/icon.svg`: jp. favicon.
- `public/resume.pdf`: genuine resume copied byte-for-byte from the supplied `Joaquin_Pizano_Resume.pdf`; all resume links use this route with the download filename `Joaquin-Pizano-Resume.pdf`.
- `public/evidence/`: portable source reports, comparison CSV, and methodology notes.

## Evidence and interpretation

RiskMap uses the September 8, 2026 source snapshot and ZIP 33708 2024 effective-year audit. A missing GEOID is a geographic coverage limitation, not evidence of no flood exposure. Row counts, policyCount aggregates, and calendar-year duration measures remain distinct. The further exposure sensitivity is explicitly provisional. The 18 passed project validation tests are supplied as documented background, not claimed as newly rerun portfolio tests. The public RiskMap repository is verified at https://github.com/joaquinpizano/RiskMap and linked from its case study. Its source project remains separate.

PharmaOpt uses the local corrected model experiment created October 23, 2026. Its average-precision results differ from earlier historical model comparisons; the portfolio explicitly names the corrected experiment and links its source CSV. The 2025 evaluation cohort was already inspected during development. Event flags are not independently verified active shortages, and scores are not calibrated probabilities. Different solvers and historical data limitations constrain interpretation.

The budget planner defaults to $500,000 / $1,000 per review, capped at 500 packages. The team limit is adjustable up to the source dashboard's 5,000-package maximum. It is a transparent arithmetic illustration, not a model prediction or a reproduction of historical selections. No heavy charting or additional production dependencies were introduced.

## Deploy through Vercel when ready

These steps are instructions only; they have not been executed.

1. Install Node.js 22 LTS and confirm `npm ci`, `npm run typecheck`, and `npm run build` pass.
2. Use the separate public repository https://github.com/joaquinpizano/joaquin-portfolio for this project's source. Keep `.tools`, `.next`, `node_modules`, and environment files excluded using `.gitignore`. Do not include other projects or datasets.
3. Sign in to Vercel, choose **Add New → Project**, connect GitHub, and import that repository.
4. Choose a recognizable project name, such as `joaquin-pizano` if available. Set Framework Preset to **Next.js**, Root Directory to the repository root, Node.js to **22.x**, and retain the default install/build/output settings. No environment variables are required. Default build command: `npm run build`; leave the output directory override off.
5. Choose **Deploy** only when ready to publish. In project settings review Deployment Protection so the production portfolio is publicly accessible as intended.
6. Use the actual production alias shown in the project's Domains section. A name like `joaquin-pizano.vercel.app` is an example, not an existing or reserved URL. Test the returned URL in a signed-out/private browser, including both projects and the PDF download, before sharing it with employers.
7. Only after verifying that production URL, add `metadataBase` and route-specific canonical metadata for it. No canonical domain is currently hardcoded.
8. If you later confirm ownership and DNS control of `joaquinpizano.com`, add it under **Settings → Domains**, follow Vercel's displayed DNS records, and wait for verification/HTTPS before switching canonical metadata. No ownership or domain purchase is assumed.

Official references: https://vercel.com/docs/frameworks/full-stack/nextjs and https://vercel.com/docs/domains/working-with-domains

## Remaining checks before sharing

The genuine resume is present, so there is no missing-PDF blocker. LinkedIn and Streamlit may restrict automated access; manually check their live destinations before sharing. GitHub links are checked separately. A verified production URL is needed for canonical metadata, which is intentionally deferred. See `VALIDATION.md` for actual checks and limits.
