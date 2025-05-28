// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        // Renamed class from "navbar" to "navbar-container" for new styling
        <header className="navbar-container">
            <div className="navbar-content"> {/* For positioning logo and pill-nav */}
                <Link href="/" className="navbar-logo">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={38} // Slightly adjusted size, can be reverted to 46x44 if preferred
                        height={36}
                    />
                </Link>
                <nav className="pill-nav"> {/* The pill itself */}
                    <NavItems />
                    <div className="auth-section">
                        <SignedOut>
                            <SignInButton>
                                <button className="pill-nav-link nav-link-signin">Sign In</button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            {/* You can customize UserButton appearance via ClerkProvider in layout.tsx */}
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;