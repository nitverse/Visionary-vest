import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { dark } from "@clerk/themes";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
        <html lang="en">
        <body
          className={cn(
            "antialiased font-sans bg-black text-gray-100",
            poppins.className
          )}
        >
          <Navbar />
          <div className={"w-full h-full pt-[64px] overflow-hidden"}>
            {children}
          </div>
          <Footer />
         <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
