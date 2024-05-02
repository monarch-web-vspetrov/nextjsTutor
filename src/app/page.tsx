import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next.js</h1>
      <Link href="/products">Products</Link>
    </>
  );
}
