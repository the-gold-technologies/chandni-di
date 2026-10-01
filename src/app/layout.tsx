import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://chandnidi.org'),
  title: 'Chandni Di | Education, Counselling & Career for Slum Children',
  description:
    'Dedicated since 2016 to transforming the lives of slum and street children across Delhi-NCR through foundational bridge education, school sponsorships, holistic counselling, and 100% college-to-career funding. 80G tax-exempt.',
  keywords: [
    'Chandni Di NGO',
    'Slum children education',
    'Delhi NCR NGO',
    'Child education sponsorship',
    '80G tax exemption donation',
    'Bridge schooling',
    'After school tuition',
    'College to career'
  ],
  authors: [{ name: 'Chandni Di NGO' }],
  openGraph: {
    title: 'Chandni Di | Empowering Slum Children Through Education',
    description:
      'From foundational literacy to university degrees: Walk with children towards an independent future. 80G Tax Deductible.',
    url: 'https://chandnidi.org',
    siteName: 'Chandni Di NGO',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Children studying happily at Chandni Di NGO centre',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-cream text-neutral-900 min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
