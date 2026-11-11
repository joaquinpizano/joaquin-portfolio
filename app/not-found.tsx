import Link from 'next/link';
import Header from '@/components/Header';
export default function NotFound(){return <><Header/><main id="main" className="shell section"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Let’s find a<br/>better starting point.</h1><Link className="button primary" href="/">Back to the portfolio ↗</Link></main></>;}
