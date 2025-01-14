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
  { href: "/products", text: "Products" },
  { href: "/about", text: "About" },
  { href: "/admin", text: "Admin" },
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
          <header className="p-4">
            <nav className="bg-stone-900 rounded flex justify-between items-center gap-4">
              <ul className="inline-flex gap-6 px-6 py-2">
                {configNavItems.map((navItem, index) => (
                  <li key={index}>
                    <Link href={navItem.href} className="font-bold">
                      {navItem.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="p-4">
                <ThemeModeToggle />
              </div>
            </nav>
          </header>

          <main className="min-h-screen p-4">{children}</main>

          <footer>
            <p className="p-2 text-center text-sm text-secondary">
              {new Date().getFullYear()} &copy; Goosejob
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
