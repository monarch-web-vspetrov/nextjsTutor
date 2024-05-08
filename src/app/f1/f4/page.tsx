import Link from "next/link";

function F4() {
  return (
    <>
      <div>F4</div>
      <Link href="/f1/f3">Intrecepted TO f3</Link>
      <Link href="/blog">Intrecepted to blog</Link>
    </>
  );
}

export default F4;
