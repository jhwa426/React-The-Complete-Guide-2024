import React from 'react'
import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
]

const ProductsPage = () => {
    return (
        <>
            <h1>The Product page!</h1>

            <ul>
                {/* <li><Link to="/products/Product-1">Product 1</Link></li>
                <li><Link to="/products/Product-2">Product 2</Link></li>
                <li><Link to="/products/Product-3">Product 3</Link></li> */}

                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}

            </ul>
        </>
    );
}

export default ProductsPage;