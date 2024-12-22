import './globals.css';
import { Header } from '@/components/layout/Header';
import {PokedexProvider} from '@/components/context/PokedexContext'
import {Footer} from '@/components/Footer/Footer'

export const metadata = {
  title: 'Next.js App',
  description: 'Created with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <PokedexProvider>
       <Header />
       {children}
       <Footer/>
       </PokedexProvider>
      </body>
    </html>
  );
}