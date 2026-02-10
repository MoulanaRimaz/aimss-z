import { Inter, Roboto } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"], variable: "--font-primary" });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-heading" });

export const metadata = {
  title: "AIMSS@Z | Zahira National School Hambantota",
  description: "Association for Improvement of Mathematics and Science Streams at Zahira National School Hambantota.",
  icons: {
    icon: '/icon.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <Providers>
          <Header />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
