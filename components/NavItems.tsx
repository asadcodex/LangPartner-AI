'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    { label:'Home', href: '/' },
    { label: 'Language Partners', href: '/companions' },
    { label: 'Dashboard', href: '/my-journey' },
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <div className="nav-items-group">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        "pill-nav-link",
                        pathname === href ? "active" : ""
                    )}
                >
                    {label}
                </Link>
            ))}
        </div>
    )
}

export default NavItems;