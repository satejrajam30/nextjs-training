import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Login',
  description: 'This is a sample login page',
  keywords: 'login, sign up, password',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
