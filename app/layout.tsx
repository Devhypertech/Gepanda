import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';


export const metadata = {
  title: 'My Site',
  description: 'My description',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}