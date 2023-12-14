import React from 'react'
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const params = useParams();

    const productId = params.productId;
    return (
        <>
            <h1>Product details</h1>
            <p>{productId}</p>

            <p>
                <Link to="/products">Back to Product</Link>
            </p>

            <p>
                <Link to=".." relative="path">Back</Link>
            </p>
        </>
    );
}

export default ProductDetailPage;