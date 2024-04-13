import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
// import { ClerkProvider } from '@clerk/nextjs'; // Import the ClerkProvider
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Le Guide du Bleu',
  description: "L'application de référence pour les primo-arrivants en France ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers >
            {children}
          </Providers>
        </body>
      </html>
    // </ClerkProvider>
  );
}
