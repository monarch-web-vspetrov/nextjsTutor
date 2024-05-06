"use client"
import Link from "next/link";
import { Metadata } from "next";


// export const generateMetadata = ({params} : {
//     params: {
//         productId: string,
//         reviewId: string
//     }
// }) : Metadata => {
//     return {
//         title: `Product ${params.reviewId}`,
//         description: `Review ${params.reviewId} on product ${params.productId}`
//     }
// }
function Review({params}: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    if (parseInt(params.reviewId) > 1000){
        throw new Error("Текст ошибки")
    }
    return ( 
        <div>
            <button><Link href="/products">Back</Link></button>
            <hr />
                <p>Review on {params.productId}</p>
                <p>Review id is {params.reviewId}</p>
        </div>
     );
}

export default Review;