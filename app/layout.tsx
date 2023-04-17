import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/common/Header';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const title = 'Frankfurt CodeTalks';
const description =
  'Join our programming Meetup if you live near Frankfurt and are interested in coding.';

export const metadata = {
  title,
  description,
  keywords:
    'Frankfurt Programming, Frankfurt Developer, Frankfurt Korean, 프랑크푸르트 프로그래밍, 프랑크푸르트 개발, 프랑크푸르트 스터디, 프랑크푸르트 한국',
  openGraph: {
    title,
    type: 'website',
    description,
    siteName: title,
    url: 'https://fct.h-code.dev/',
  },
  twitter: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
