# Validation — November 11, 2026 finalization

## Completed checks

- `npm run build`: passed on existing Next.js 16.4.6; homepage, both case studies, not-found page, and SVG favicon generated successfully.
- `tsc --noEmit`: passed.
- Chrome: `/`, `/projects/riskmap`, and `/projects/pharmaopt` each returned HTTP 200 at 1440, 768, 390, and 320px viewport widths. All 12 checks passed with no horizontal page overflow.
- No browser page errors or failing local asset responses were observed across the tested pages.
- Homepage section IDs and fragment anchors passed; both primary calls to action were clicked and reached their intended anchors.
- Nine discovered internal route/asset destinations returned HTTP 200, including the evidence documents, comparison CSV, resume, and favicon.
- RiskMap chart labels verified: 88.06% included and 11.94% excluded of 4,304 rows.
- Planner: default 500 reviews; $200,000 budget at $1,000 gives 200; $3,000 cost floors that to 66; team limit 50 caps it at 50. Zero budget and zero capacity produce zero. Zero/blank cost and a team limit of 5,001 yield an accessible validation message and no numeric result. Maximum allowed capacity caps at 5,000. Reset restores defaults. Arrow-key input updates work.
- Resume: genuine supplied `public/Joaquin_Pizano_Resume.pdf` was parsed with a temporary PDF tool. It identifies Joaquin Pizano and includes USF education, St. Petersburg College May 2026, employment, projects, and skills. An exact copy is published at `/resume.pdf`; HTTP 200, PDF content type, and byte-for-byte equality were confirmed. The browser download completed with filename `Joaquin-Pizano-Resume.pdf`. Both homepage resume links point to that route.
- Unknown project slug: HTTP 404.
- SVG favicon: HTTP 200 and SVG content.
- Basic accessibility: one main landmark and h1 per page, English language attribute, labeled inputs, no duplicate IDs, named links, safe new-tab rel attributes, focusable skip link, keyboard input interaction, reduced-motion media handling, and live planner feedback. This is a targeted check, not a full WCAG audit or screen-reader test.
- Accurate descriptions and page metadata are present. No unverified canonical URL is emitted.
- No placeholder, coming-soon, or confirmation-pending copy was found in rendered pages.

## Source verification

- RiskMap audit and provisional exposure-sensitivity reports were read from the supplied local path, with portable copies placed in this portfolio's `public/evidence` directory. Row and policyCount totals match the audit. No RiskMap code, report, data, or dashboard was edited or executed.
- The public repository https://github.com/joaquinpizano/RiskMap was verified through GitHub and its exact URL added to the case study.
- The 18 passed RiskMap validation tests are user-documented project background. They were not rerun during portfolio work, and are distinct from the 18 unresolved cancellation-date exceptions in the provisional exposure report.
- PharmaOpt dashboard controls, corrected comparison CSV, and experiment manifest were read from the local project. The displayed performance belongs to the corrected October 23 experiment, not earlier model runs. Original source files were not altered.
- The planner's 500-package default team limit and configurable 5,000 maximum come from the source dashboard. It does not make model predictions or historical-selection claims.

## External links and limits

- GitHub profile and PharmaOpt repository: accessible via the web tool.
- LinkedIn: supplied verified URL is linked, also consistent with the GitHub profile; direct access returned a web-tool cache/fetch failure. Live profile access still needs a manual check.
- PharmaOpt Streamlit: supplied live URL is linked; the web tool could not access it. Live application availability still needs a manual check.
- Email uses the correct mailto address; email delivery was not tested.
- No deployment was attempted. There is no verified production URL, so canonical metadata is intentionally deferred. No claim is made that joaquinpizano.com is owned or configured.
- Dependencies were unchanged; no repeated dependency audit was performed. The temporary PDF reader is isolated in ignored `.tools` and is not an application dependency.

## Local QA artifacts

The reproducible browser checks and detailed result JSON are in `.tools/qa/finalize.cjs` and `.tools/qa/final-results.json` on this machine. They use the previously installed QA-only Playwright copy and Chrome. No screenshots were required or generated for this finalization.

Port 3000 was already occupied, so an owned production test server ran on 127.0.0.1:3001 and was stopped after validation. The existing port-3000 server was not stopped. Use the README preview commands for the final source.

No Vercel deployment or domain purchase was performed. GitHub publication is separately authorized.

## GitHub publication preparation — final pass

- Added and verified the exact public RiskMap repository URL and a visible View Source on GitHub link.
- Re-ran production build and TypeScript: passed.
- Re-ran existing browser validation: all 12 route/viewport checks passed, plus planner boundaries/keyboard/reset, nine internal route/asset checks, genuine resume download, favicon, 404, and basic accessibility. No browser errors or failing local assets.
- Reviewed the 28 staged files: application source, configuration/lockfile, documentation, genuine resume PDF, and four small public evidence artifacts. No credential-pattern matches, private keys, unexpected datasets, temporary files, or large build artifacts were found. This pattern scan complements the explicit file review; it is not a guarantee against every possible secret format.
- Expanded ignore rules for secrets, credentials, temporary files, hosting state, and generated caches. The duplicate original resume remains local and ignored; only public/resume.pdf is published.
- Created the separate public repository https://github.com/joaquinpizano/joaquin-portfolio and confirmed it had no existing branches before the initial push.
- Vercel deployment and domain purchase remain deferred. Other source projects were not modified.
