import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/(components)";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quibite12",
  description: "Astrological 2D App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="width=375, initial-scale=1.0" />
        <link rel="manifest" href="manifest.json" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
