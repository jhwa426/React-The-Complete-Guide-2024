import React, { useContext } from 'react'
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
    const cartContext = useContext(CartContext);

    const totalCartItems = cartContext.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Logo Img" />
                <h1>Food Order</h1>
            </div>
            <nav>
                <Button textOnly>
                    Cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    );
}

export default Header;