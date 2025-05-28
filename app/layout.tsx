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
      <body className={`${bricolage.className} antialiased`}>
        <ClerkProvider appearance={{
            variables: { colorPrimary: '#fe5933' }, // Your existing primary for Clerk components
            elements: {
              userButtonAvatarBox: "w-8 h-8", // Makes avatar in UserButton smaller
              userButtonTrigger: "focus:ring-0 focus:shadow-none outline-none", // Removes default focus ring if it feels out of place
            }
          }} >
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
