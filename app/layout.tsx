import "./globals.css";

import Providers from "./providers";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning>

        <Providers>

          <Navbar />

          <main>{children}</main>

          <Footer />

        </Providers>

      </body>
    </html>
  );
}