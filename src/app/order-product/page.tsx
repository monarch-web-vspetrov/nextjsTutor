"use client"
import { useRouter } from "next/navigation";
import "./page.css"
export default function OrderProduct() {
    const router = useRouter();
    function handleClick() {
        return () => {
            console.log("Order Product");
            router.push("/");
        }
    }
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick()}>
                Заказать
            </button>
        </>
    );
}