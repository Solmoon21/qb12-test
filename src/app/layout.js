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
        {/* <meta content="width=375, initial-scale=1.0" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
