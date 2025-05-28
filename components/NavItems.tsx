// components/NavItems.tsx
'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    { label:'Home', href: '/' },
    { label: 'Language Partners', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' }, // Corrected to be root-relative
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        // Changed <nav> to <div> as the parent <nav> is now in Navbar.tsx
        <div className="nav-items-group">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        "pill-nav-link", // New class for common styling
                        pathname === href ? "active" : "" // Class for active state
                    )}
                >
                    {label}
                </Link>
            ))}
        </div>
    )
}

export default NavItems;