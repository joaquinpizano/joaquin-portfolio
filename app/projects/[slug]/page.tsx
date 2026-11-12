import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectVisual from '@/components/ProjectVisual';
import Pipeline from '@/components/Pipeline';
import RiskEvidence from '@/components/RiskEvidence';
import PharmaEvidence from '@/components/PharmaEvidence';
import { projects } from '@/data/portfolio';

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find(p => p.slug === slug);
  return { title: p?.name ?? 'Project not found', description: p?.summary, openGraph: { title: `${p?.name ?? 'Project'} | Joaquin Pizano`, description: p?.summary, type: 'article' }, twitter: { card: 'summary', title: p?.name, description: p?.summary } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(p => p.slug === slug);
  if (!p) notFound();
  const next = projects.find(item => item.slug !== slug)!;
  const isRisk = slug === 'riskmap';
  const steps = isRisk ? ['FEMA flood-hazard context', 'Historical NFIP claims', 'Policy geography audit', 'Provisional exposure', 'Limitations & validation'] : ['Public data', 'Cleaning and validation', 'Feature engineering', 'Experimental ranking', 'Review allocation'];
  return <><Header/><main id="main" className="shell case-study">
    <Link className="text-link" href="/#projects">← All projects</Link>
    <header className="case-header"><p className="eyebrow">{p.category} / INDEPENDENT PROJECT</p><h1>{p.name}<span>.</span></h1><p className="case-headline">{p.headline}</p><ul className="tags">{p.technologies.map(t => <li key={t}>{t}</li>)}</ul>{p.live && <a className="button primary" href={p.live} target="_blank" rel="noopener noreferrer">Launch {p.name} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}</header>
    <ProjectVisual kind={p.slug}/>
    <div className="case-layout"><aside><p className="eyebrow">PROJECT NOTES</p><p>Role: independent researcher & builder</p><p>{p.status}</p>{isRisk && <><p>Source snapshot:<br/>September 8, 2026</p><p>18 validation tests passed<br/><small>Documented project validation</small></p></>}{p.repository && <a className="text-link" href={p.repository} target="_blank" rel="noopener noreferrer">View Source on GitHub ↗<span className="sr-only"> (opens in a new tab)</span></a>}<a className="text-link evidence-source" href={isRisk ? '/evidence/riskmap-policy-audit.md' : '/evidence/pharmaopt-methodology.md'}>Read source notes ↓</a></aside>
    <div className="case-copy"><section><p className="eyebrow">01 / THE PROBLEM</p><h2>Understanding the challenge.</h2>{isRisk && <div className="evidence-note"><h3>Key finding</h3><p>In the ZIP 33708 audit, 514 of 4,304 policy records (11.94%) lacked the geographic identifiers needed to confirm Pinellas County membership. This creates a geographic coverage limitation that should be understood before interpreting county-level exposure.</p></div>}
    {isRisk && <figure className="riskmap-comparison-figure">
      <a href="/riskmap-2024-zip-comparison.png" target="_blank" rel="noopener noreferrer" aria-label="View the full-size 2024 RiskMap ZIP comparison (opens in a new tab)">
        <img src="/riskmap-2024-zip-comparison.png" width={2880} height={1530} alt="RiskMap dashboard comparing 2024 NFIP claim records and nominal reported payments for ZIPs 33703, 33706, and 33708." />
      </a>
      <figcaption>Among the three ZIPs compared, 33706 had the most 2024 NFIP claim records (4,060) and the highest nominal reported payments ($603.9 million).</figcaption>
    </figure>}<p>{p.problem}</p><h3>Why it matters</h3><p>{p.importance}</p></section>
    <section><p className="eyebrow">02 / THE APPROACH</p><h2>A traceable analytical workflow.</h2><p>{p.approach}</p><Pipeline steps={steps} label={isRisk ? 'Separate views of mapped hazard, historical claims, and provisional exposure' : 'From public records to research review priorities'}/>{isRisk ? <p>Missing or invalid counts are never silently treated as zero. Record-level classification and source snapshot checks make it possible to trace the relationship between the ZIP-only and county-filtered cohorts.</p> : <p>SQL/MySQL provides structured data organization, while Python and Jupyter support validation and modeling. Streamlit makes the research workflow explorable. Review costs and team limits remain explicit assumptions rather than claims about operational spending.</p>}</section>
    <section><p className="eyebrow">03 / EVIDENCE & INTERPRETATION</p><h2>{isRisk ? 'Reconcile before interpreting.' : 'Make the assumptions visible.'}</h2>{isRisk ? <RiskEvidence/> : <PharmaEvidence/>}</section>
    {isRisk && <section><h2>Business application</h2><p>Insurance analysts can use this type of geographic reconciliation to assess data completeness before creating exposure reports, comparing geographic concentrations, or supporting risk-planning decisions. Identifying missing geographic information helps teams understand where additional validation is needed before relying on county-level results.</p><p className="helper">This describes potential business use. RiskMap has not been deployed by an insurer or used to influence a real business decision.</p></section>}
    <section className="source-notes"><p className="eyebrow">04 / SOURCES & LIMITATIONS</p><h2>Keep the evidence close.</h2>{isRisk ? <><p>The figures come from the local ZIP 33708 audit and provisional exposure-sensitivity reports. Effective-year policy rows, summed policyCount, and duration-weighted exposure are separate measures. Equal snapshot labels do not guarantee an immutable database revision.</p><ul><li><a href="/evidence/riskmap-policy-audit.md">ZIP 33708 effective-year policy audit ↓</a></li><li><a href="/evidence/riskmap-exposure-sensitivity.md">Provisional exposure sensitivity and limitations ↓</a></li></ul></> : <><p>The corrected experiment was created October 23, 2026, using 2022–2024 training years and a previously inspected 2025 evaluation cohort. This page preserves the source experiment’s limitations; it does not claim independent validation or real-world impact.</p><ul><li><a href="/evidence/pharmaopt-methodology.md">Source artifacts, definitions, and model limitations ↓</a></li><li><a href="/evidence/pharmaopt-corrected-comparison.csv">Corrected outcome comparison CSV ↓</a></li></ul><a className="button primary" href={p.live!} target="_blank" rel="noopener noreferrer">Launch PharmaOpt ↗<span className="sr-only"> (opens in a new tab)</span></a></>}</section></div></div>
    <div className="next-project"><span className="eyebrow">CONTINUE EXPLORING</span><Link href={`/projects/${next.slug}`}>{next.name} <span>↗</span></Link></div>
  </main><Footer/></>;
}
