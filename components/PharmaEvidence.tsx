import BudgetPlanner from './BudgetPlanner';
import { pharmaStudy } from '@/data/portfolio';
export default function PharmaEvidence() {
  return <>
    <div className="evidence-note"><h3>Research rankings, with clear limits</h3><p>These models are research tools, not certified shortage prediction tools. A model ranking score is not a verified probability of shortage. A high ranking does not establish a current shortage.</p></div>
    <BudgetPlanner/>
    <h3>Comparing v0.4 and v0.5</h3><p>The corrected comparison retains v0.4 as the recommended comparison model. v0.5 is an experimental alternative with recall-language features. The table below uses the local <code>corrected_model_comparison_v01</code> experiment, rather than mixing results from earlier model versions.</p>
    <div className="model-cards">{pharmaStudy.models.map(model => <article key={model.name}><span className="eyebrow">{model.role}</span><h4>{model.name}</h4><p>{model.method}</p></article>)}</div>
    <div className="table-scroll"><table><caption>Corrected model comparison · 2025 development evaluation</caption><thead><tr><th scope="col">Model</th><th scope="col">Average precision</th><th scope="col">FDA-linked flags in top 500</th></tr></thead><tbody>{pharmaStudy.models.map(model => <tr key={model.name}><th scope="row">{model.name}</th><td>{model.averagePrecision.toFixed(6)}</td><td>{model.captured} of 96</td></tr>)}</tbody></table></div>
    <p>In this experiment, v0.5 did not improve average precision or the number of FDA-linked event flags captured in the top 500. That negative result is useful: adding features does not automatically make an analytical model better.</p>
    <p className="helper">The 2025 evaluation set was previously inspected during development, so it is not an untouched final test. The 96 FDA-linked events are not 96 independently verified active shortages. The models use different logistic regression solvers, limiting attribution of differences to features alone. Historical FDA revisions and unverified CMS release timing also limit interpretation. Average precision is reported as a ranking metric, not a shortage probability or an accuracy claim.</p>
    <a className="text-link" href="/evidence/pharmaopt-corrected-comparison.csv" download>Download source comparison CSV ↓</a>
  </>;
}
