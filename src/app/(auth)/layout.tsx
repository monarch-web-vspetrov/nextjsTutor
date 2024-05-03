"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({children}: {children: React.ReactNode}) {
    const navLinks = [
        {name: "Register", href:"/reg"},
        {name: "Login", href:"/login"},
    ]

    const pathname =usePathname();
    return (
        <>
            <section>
                {navLinks.map((link) => {
                    const isActive =pathname.startsWith(link.href)
                    return (
                        <Link key={link.name} className={isActive ? "AA" : "BB"} href={link.href}>{link.name}</Link>
                    )
                })}
            </section>
            <section>
                {children}
            </section>
        </>
    );
}