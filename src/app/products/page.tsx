import Link from "next/link";
import Product from './Product';
import { cache } from "react";

export const revalidate = 200;

async function  Products() {
    const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products", {
            cache: "force-cache",
        });
        const data = await res.json();
        return data; 
    }

    const data = await fetchData();

    interface Product {
        id: number;
        title: string;
    }

    interface ProductProps {
        title: string;
      }

    return ( 
        
        <>
        <button><Link href="/">Back</Link></button>
                <h1>Products</h1>
                <div>
                    {data.map((product: Product) => <Product key={product.id} id={product.id} title={product.title} />)}
                </div>
        </>
     );
}

export default Products;