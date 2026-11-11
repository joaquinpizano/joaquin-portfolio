'use client';
import { useState } from 'react';
import { pharmaStudy } from '@/data/portfolio';
const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
export default function BudgetPlanner() {
  const [budget, setBudget] = useState(String(pharmaStudy.defaultBudget));
  const [cost, setCost] = useState(String(pharmaStudy.defaultReviewCost));
  const [capacity, setCapacity] = useState(String(pharmaStudy.defaultCapacity));
  const b = Number(budget), c = Number(cost), limit = Number(capacity);
  const valid = budget !== '' && cost !== '' && capacity !== '' && Number.isFinite(b) && b >= 0 && b <= 2000000 && Number.isInteger(b) && Number.isFinite(c) && c >= 1 && c <= 2000000 && Number.isInteger(c) && Number.isInteger(limit) && limit >= 0 && limit <= pharmaStudy.maximumCapacity;
  const affordable = valid ? Math.floor(b / c) : 0;
  const reviews = Math.min(affordable, limit, pharmaStudy.packages);
  return <div className="budget-planner">
    <div className="planner-heading"><span className="eyebrow">INTERACTIVE / ILLUSTRATIVE ONLY</span><h3>What could a review budget support?</h3><p>Adjust the assumptions to explore review capacity. This calculator does not run a model or select actual packages.</p></div>
    <div className="planner-inputs">
      <label htmlFor="review-budget">Hypothetical budget ($)<input id="review-budget" type="number" min="0" max="2000000" step="1" value={budget} onChange={e => setBudget(e.target.value)} aria-describedby="planner-assumptions planner-validation"/></label>
      <label htmlFor="review-cost">Assumed cost per review ($)<input id="review-cost" type="number" min="1" max="2000000" step="1" value={cost} onChange={e => setCost(e.target.value)} aria-describedby="planner-assumptions planner-validation"/></label>
      <label htmlFor="review-capacity">Team review limit (packages)<input id="review-capacity" type="number" min="0" max={pharmaStudy.maximumCapacity} step="1" value={capacity} onChange={e => setCapacity(e.target.value)} aria-describedby="planner-assumptions planner-validation"/></label>
    </div>
    <p id="planner-validation" className="planner-validation" role="status">{valid ? 'All inputs are illustrative assumptions.' : 'Enter whole numbers: budget $0–$2,000,000, cost $1–$2,000,000, and team limit 0–5,000.'}</p>
    <div className="planner-results" aria-live="polite" aria-atomic="true">
      <div><span>Affordable within constraints</span><strong data-testid="review-count">{valid ? reviews.toLocaleString('en-US') : '—'}</strong><small>potential package reviews</small></div>
      <div><span>Illustrative allocated cost</span><strong>{valid ? money(reviews * c) : '—'}</strong><small>{valid ? `${money(b - reviews * c)} remaining` : 'Valid inputs required'}</small></div>
    </div>
    <p className="formula">reviews = min(⌊budget ÷ cost⌋, team limit, study packages)</p>
    <p id="planner-assumptions" className="helper">Defaults match the source dashboard: $500,000 budget, $1,000 per review, and a 500-package team limit. Its configurable limit extends to 5,000; this planner also permits zero to explore no-capacity scenarios. The study contains 221,667 packages. Costs are assumptions, not expenditures. Budget determines affordability; model choice, ordering, eligibility, and capacity determine which packages a research workflow selects. A score is not a verified shortage probability.</p>
    <button type="button" className="planner-reset" onClick={() => { setBudget(String(pharmaStudy.defaultBudget)); setCost(String(pharmaStudy.defaultReviewCost)); setCapacity(String(pharmaStudy.defaultCapacity)); }}>Reset example assumptions ↺</button>
  </div>;
}
