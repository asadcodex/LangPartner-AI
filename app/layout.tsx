// app/layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LangPartner",
  description: "Your personal AI tutor for fluent language learning through real-time conversations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Removed bg-background from body. The body will be transparent by default. */}
      <body className={`${bricolage.className} antialiased flex flex-col h-full`}> 
        <ClerkProvider appearance={{
            variables: { colorPrimary: '#fe5933' },
            elements: {
              userButtonAvatarBox: "w-8 h-8",
              userButtonTrigger: "focus:ring-0 focus:shadow-none outline-none",
            }
          }} >
          <Navbar /> {/* Navbar takes its own height and has conditional background */}
          {/* This wrapper takes remaining space. */}
          {/* Added bg-background here to provide default background for pages. */}
          {/* On app/page.tsx, its fixed hero image (z-0) will cover this bg-background. */}
          <div className="flex-1 overflow-y-auto relative bg-background"> 
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
