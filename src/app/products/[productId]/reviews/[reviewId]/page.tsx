"use client"

import { notFound } from "next/navigation";


function Review({params}: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    if (parseInt(params.reviewId) > 1000){
        notFound()
    }
    return ( 
        <div>
            <p>
                Review on {params.productId}
                Review id is {params.reviewId}
            </p>
        </div>
     );
}

export default Review;