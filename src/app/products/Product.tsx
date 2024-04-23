'use client'

import Image from "next/image";
import styles from "./Product.module.css";

interface ProductProps {
    title: string;
    id: number;
    image: string;
    price: number;
  }

function Products(props: ProductProps) {

    return ( 
        <div className={styles.product}>
            <div className="rounded-lg border-2 border-gray-200 flex flex-col items-center p-5 hover:scale-105 hover:border-red-500 transition-all duration-200">
                <h1 className="capitalize">{props.title}</h1>
                <h2>{props.id}</h2>
                <Image src={props.image} width={200} height={400} alt="image"></Image>
                <p>{props.price} $</p>
            </div>
        </div>
     );
}

export default Products;