import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next.js</h1>
      <Link href="/products">Products</Link>
      <Link href="/blog">blog</Link>
      <Link href="/dashbord">dashbord</Link>
      <Link href="/login">login</Link>
      <Link href="/reg">reg</Link>
    </>
  );
}
