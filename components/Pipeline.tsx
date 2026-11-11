export default function Pipeline({ steps, label }: { steps: string[]; label: string }) {
  return <figure className="pipeline-figure"><figcaption>{label}</figcaption><ol className="pipeline">{steps.map((step, index) => <li key={step}><span className="pipeline-number" aria-hidden="true">0{index + 1}</span><span>{step}</span>{index < steps.length - 1 && <span className="pipeline-arrow" aria-hidden="true">→</span>}</li>)}</ol></figure>;
}
