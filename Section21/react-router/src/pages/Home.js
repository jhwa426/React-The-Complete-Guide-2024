import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {

    // Navigating Programmatically
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/products");
    }

    return (
        <>
            <h1>HomePage !</h1>
            <p>
                Go to <Link to="/products">the list of products</Link>.
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    )
}

export default HomePage;