import { ThemeProvider } from './components/ThemeProvider';
import { Niramit, Poppins } from 'next/font/google';
import './globals.css';

const niramit = Niramit({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-niramit',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});


export const metadata = {
  title: 'My Site',
  description: 'My description',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className={`${niramit.variable} ${poppins.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}