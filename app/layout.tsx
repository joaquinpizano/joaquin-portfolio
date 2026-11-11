import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'Joaquin Pizano | AI & Business Analytics', template: '%s | Joaquin Pizano' },
  description: 'Joaquin Pizano is a University of South Florida student building data analytics projects in pharmaceutical supply intelligence and flood insurance risk research.',
  authors: [{ name: 'Joaquin Pizano' }],
  openGraph: { title: 'Joaquin Pizano | AI & Business Analytics', description: 'Independent projects in pharmaceutical supply intelligence and flood insurance risk research by a USF AI and Business Analytics student.', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary', title: 'Joaquin Pizano | AI & Business Analytics', description: 'Independent data analytics projects in pharmaceutical supply and flood insurance research.' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
