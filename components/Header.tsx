import Link from 'next/link';
export default function Header() {
  return <header className="site-header"><div className="shell header-inner"><Link className="wordmark" href="/" aria-label="Joaquin Pizano home">jp<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#projects">Projects</Link><Link href="/#about">About</Link><Link href="/#experience">Experience</Link><Link className="nav-contact" href="/#contact">Let’s connect <span aria-hidden="true">↗</span></Link></nav></div></header>;
}
