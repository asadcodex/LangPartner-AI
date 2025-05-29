// components/Navbar.tsx
'use client'; // Crucial: Make it a client component

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";
import { usePathname } from "next/navigation"; // Import usePathname
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

const Navbar = () => {
    const pathname = usePathname();
    const isOnMainPage = pathname === '/'; // Check if it's the main page

    return (
        // Apply conditional classes for background styling
        <header className={cn(
            "navbar-container", // Base structural styles for the navbar
            isOnMainPage ? "navbar-main-page" : "navbar-default-page" // Conditional background class
        )}>
            <div className="navbar-content">
                <Link href="/" className="navbar-logo">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={38}
                        height={36}
                    />
                </Link>
                {/* The .pill-nav already has a semi-transparent background which should work fine */}
                <nav className="pill-nav"> 
                    <NavItems />
                    <div className="auth-section">
                        <SignedOut>
                            <SignInButton>
                                <button className="pill-nav-link nav-link-signin">Sign In</button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
