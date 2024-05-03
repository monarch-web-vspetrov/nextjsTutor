"use client";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
    return ( 
        <header style={
            {
              margin:"10px",
              padding:"10px",
              backgroundColor: "gray"
            }
          }>
            Header stuling
            <hr />
            <button onClick={() => router.back()}>Назад</button>
          </header>
     );
}

export default Header;