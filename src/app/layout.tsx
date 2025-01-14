import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { ThemeProvider } from "@/components/shared/theme-provider";
import Link from "next/link";
import { ThemeModeToggle } from "@/components/shared/theme-mode-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Goosejob",
  description: "Find good jobs and hire suitable people",
};

const configNavItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/products", text: "Products" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="flex justify-between gap-4">
            <ul className="inline-flex gap-4 p-4">
              {configNavItems.map((navItem, index) => (
                <li key={index}>
                  <Link href={navItem.href}>{navItem.text}</Link>
                </li>
              ))}
            </ul>

            <div className="p-4">
              <ThemeModeToggle />
            </div>
          </nav>

          <main className="min-h-screen">{children}</main>

          <footer>
            <p className="p-2 text-center">Goosejob</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
