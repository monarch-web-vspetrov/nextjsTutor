'use client'

import Image from "next/image";
import styles from "./Product.module.css";

interface ProductProps {
    title: string;
    id: number;
  }

function Products(props: ProductProps) {

    return ( 
        <div className={styles.product}>
            <h1>{props.title}</h1>
            <h2>{props.id}</h2>

            <Image src="/15. Облака.jpg" width={800} height={400} alt="image"></Image>
        </div>
     );
}

export default Products;