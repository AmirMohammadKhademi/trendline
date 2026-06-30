import "./globals.css";

import Providers from "./providers";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "Trendline - پلتفرم تحلیل و سیگنال معاملاتی",
  description: "پلتفرم حرفه‌ای تحلیل و سیگنال معاملاتی با هویت ایرانی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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