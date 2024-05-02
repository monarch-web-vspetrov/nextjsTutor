"use client"

import Link from "next/link";

function Default({params}: {
    params: {
        slug: string[]
    }
}) {
    if (params.slug?.length >= 2) {
        return <h1>Docs page вложенность 2 {params.slug.join(" ")}</h1>;
    } else if (params.slug?.length === 1) {
        return <h1>Docs page вложенность 1 {params.slug.join(" ")}</h1>;
    }
    return (
        <>
        <h1>Home Docs page</h1>
        <Link href="/docs/concepts">Concepts</Link>
        </>
    );
}

export default Default;