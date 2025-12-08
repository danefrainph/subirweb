import './globals.css';
import { Outfit } from 'next/font/google';
 
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300','400','600','700'],
  display: 'swap',
});
 
export const metadata = {
  title: 'tusitio.com.pe',
  description: 'Sitios web accesibles para emprendedores',
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
