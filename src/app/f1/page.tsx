import Link from "next/link";

function F1() {
  return (
    <>
      <div>f1 page</div>
      <div>
        <Link href="/f1/f2">f2</Link>
      </div>
    </>
  );
}

export default F1;
