# PharmaOpt — source notes

This portfolio summary was checked against local project artifacts on November 11, 2026. It describes a research prototype, not an independently validated prediction or operational system.

## Corrected model comparison

Source: `outputs/corrected_model_comparison_v01/corrected_outcome_comparison.csv` and its `experiment_manifest.json`, experiment created October 23, 2026.

- Training years: 2022–2024.
- Evaluation year: 2025, previously inspected development holdout.
- Primary outcome: FDA-linked event within prediction year; 96 positive flags, not independently verified active shortages.
- v0.4 corrected (liblinear): average precision 0.0038970900621604822; 10 flags captured in top 500.
- v0.5 corrected (lbfgs): average precision 0.0028578304440981584; 7 flags captured in top 500.
- Source manifest's primary model decision: v0.4.

These figures belong to the corrected experiment. Earlier `pharmaopt_model_comparison_v05.csv` contains different values and is not the source of the displayed performance table.

Limitations: the evaluation set was previously examined during development; FDA labels were not independently verified as active shortages; FDA records may be revised retrospectively; CMS release timing was not independently verified; different logistic regression solvers were used; scores are not calibrated shortage probabilities.

## Review-allocation illustration

Source: local `pharmaopt_dashboard.py`, Allocation Controls, and the user-confirmed 2025 study size of 221,667 packages (also recorded in the historical model comparison).

- Default hypothetical budget: $500,000.
- Default assumed cost per package review: $1,000.
- Default team capacity: 500 packages; source dashboard allows a configurable limit up to 5,000.
- Calculation: min(floor(budget / review cost), configured team capacity, available study packages).
- Default illustrative result: 500 affordable reviews. Costs are assumptions, not actual spending.

The portfolio calculator additionally permits zero budget and zero team capacity to explore boundary scenarios. It does not load package records, run models, apply eligibility checks, or reproduce historical selections. Budget alone cannot determine which packages are selected.

Project repository: https://github.com/joaquinpizano/pharmaopt
Application: https://pharmaopt.streamlit.app/
