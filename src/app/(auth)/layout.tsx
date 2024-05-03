"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Layout({children}: {children: React.ReactNode}) {
    const [input, setInput] = useState("");

    const navLinks = [
        {name: "Register", href:"/reg"},
        {name: "Login", href:"/login"},
    ]

    const pathname =usePathname();
    return (
        <>  
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border-2"/>
            </div>
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