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
  const steps = isRisk ? ['FEMA NFIP data', 'ZIP screening', 'Geographic reconciliation', 'Exposure calculations', 'Validation'] : ['Public data', 'Cleaning and validation', 'Feature engineering', 'Experimental ranking', 'Review allocation'];
  return <><Header/><main id="main" className="shell case-study">
    <Link className="text-link" href="/#projects">← All projects</Link>
    <header className="case-header"><p className="eyebrow">{p.category} / INDEPENDENT PROJECT</p><h1>{p.name}<span>.</span></h1><p className="case-headline">{p.headline}</p><ul className="tags">{p.technologies.map(t => <li key={t}>{t}</li>)}</ul>{p.live && <a className="button primary" href={p.live} target="_blank" rel="noopener noreferrer">Launch PharmaOpt <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}</header>
    <ProjectVisual kind={p.slug}/>
    <div className="case-layout"><aside><p className="eyebrow">PROJECT NOTES</p><p>Role: independent researcher & builder</p><p>{p.status}</p>{isRisk && <><p>Source snapshot:<br/>September 8, 2026</p><p>18 validation tests passed<br/><small>Documented project validation</small></p></>}{p.repository && <a className="text-link" href={p.repository} target="_blank" rel="noopener noreferrer">View Source on GitHub ↗<span className="sr-only"> (opens in a new tab)</span></a>}<a className="text-link evidence-source" href={isRisk ? '/evidence/riskmap-policy-audit.md' : '/evidence/pharmaopt-methodology.md'}>Read source notes ↓</a></aside>
    <div className="case-copy"><section><p className="eyebrow">01 / THE PROBLEM</p><h2>Understanding the challenge.</h2><p>{p.problem}</p><h3>Why it matters</h3><p>{p.importance}</p></section>
    <section><p className="eyebrow">02 / THE APPROACH</p><h2>A traceable analytical workflow.</h2><p>{p.approach}</p><Pipeline steps={steps} label={isRisk ? 'From source records to validated exposure analysis' : 'From public records to research review priorities'}/>{isRisk ? <p>Missing or invalid counts are never silently treated as zero. Record-level classification and source snapshot checks make it possible to trace the relationship between the ZIP-only and county-filtered cohorts.</p> : <p>SQL/MySQL provides structured data organization, while Python and Jupyter support validation and modeling. Streamlit makes the research workflow explorable. Review costs and team limits remain explicit assumptions rather than claims about operational spending.</p>}</section>
    <section><p className="eyebrow">03 / EVIDENCE & INTERPRETATION</p><h2>{isRisk ? 'Reconcile before interpreting.' : 'Make the assumptions visible.'}</h2>{isRisk ? <RiskEvidence/> : <PharmaEvidence/>}</section>
    <section className="source-notes"><p className="eyebrow">04 / SOURCES & LIMITATIONS</p><h2>Keep the evidence close.</h2>{isRisk ? <><p>The figures come from the local ZIP 33708 audit and provisional exposure-sensitivity reports. Effective-year policy rows, summed policyCount, and duration-weighted exposure are separate measures. Equal snapshot labels do not guarantee an immutable database revision.</p><ul><li><a href="/evidence/riskmap-policy-audit.md">ZIP 33708 effective-year policy audit ↓</a></li><li><a href="/evidence/riskmap-exposure-sensitivity.md">Provisional exposure sensitivity and limitations ↓</a></li></ul></> : <><p>The corrected experiment was created October 23, 2026, using 2022–2024 training years and a previously inspected 2025 evaluation cohort. This page preserves the source experiment’s limitations; it does not claim independent validation or real-world impact.</p><ul><li><a href="/evidence/pharmaopt-methodology.md">Source artifacts, definitions, and model limitations ↓</a></li><li><a href="/evidence/pharmaopt-corrected-comparison.csv">Corrected outcome comparison CSV ↓</a></li></ul><a className="button primary" href={p.live!} target="_blank" rel="noopener noreferrer">Launch PharmaOpt ↗<span className="sr-only"> (opens in a new tab)</span></a></>}</section></div></div>
    <div className="next-project"><span className="eyebrow">CONTINUE EXPLORING</span><Link href={`/projects/${next.slug}`}>{next.name} <span>↗</span></Link></div>
  </main><Footer/></>;
}
