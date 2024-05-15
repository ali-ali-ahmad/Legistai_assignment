import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./redux/storeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legstia",
  description: "Your way to make law easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" data-theme="cupcake">
        <body className={inter.className}>
          <Toaster position="bottom-center" />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
