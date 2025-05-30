'use client';

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const pathname = usePathname();
    const isOnMainPage = pathname === '/';

    return (
        <header className={cn(
            "navbar-container",
            isOnMainPage ? "navbar-main-page" : "navbar-default-page"
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
