import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";
import "../styles/timeline.css";
import ThemeProvider from "./utils/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saint Timeline",
  description: "Timeline of saints, events and heresies from Church History",
  icons: {
    icon: [
      { url: 'icons8-christian-cross-stickers-16.png', sizes: '16x16', type: 'image/png' },
      { url: 'icons8-christian-cross-stickers-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
            <AppRouterCacheProvider>
              {/* <ThemeSwitcher /> */}
              {children}
            </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
