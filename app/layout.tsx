import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import SessionProvider from './SessionProvider';
import RegisterNavbar from "@/components/navbar/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Mad Nuts ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <RegisterNavbar />
          {children}
        </SessionProvider>
      </body>
    </html>
    // <html lang="en">
    //   <body className={inter.className}>
    //     {children}
    //   </body>
    // </html>
  );
}