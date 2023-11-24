import React, { useContext } from 'react'
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}

const Checkout = () => {
    const cartCtx = useContext(CartContext);

    const userProgressCtx = useContext(UserProgressContext);

    const {
        data,
        isLoading: isSending,
        error,
        sendRequest,
        clearData
    } = useHttp("http://localhost:3000/orders", requestConfig);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    const handleClose = () => {
        userProgressCtx.hideCheckout();
    }

    const handleFinish = () => {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(
            JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        );

        // fetch("http://localhost:3000/orders", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         order: {
        //             items: cartCtx.items,
        //             customer: customerData
        //         }
        //     })
        // });
    }

    let actions = (
        <>
            <Button type="button" textOnly onClick={handleClose}>Close</Button>
            <Button>Submit Order</Button>
        </>
    );

    if (isSending) {
        actions = <span>Sending order data...</span>;
    }

    if (data && !error) {
        return (
            <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
                <h2>Success!</h2>
                <p>Your order was submitted successfully.</p>
                <p className="modal-actions">
                    <Button onClick={handleFinish}>Okay</Button>
                </p>
            </Modal>
        )
    }

    return (
        <Modal
            className="cart"
            open={userProgressCtx.progress === "checkout"}
            onClose={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: ${cartTotal}</p>

                <Input label="Full Name" type="text" id="name" />
                <Input label="E-mail address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>

                {error && <Error title="Failed to submit order" message={error} />}

                <p className="modal-actions">
                    {actions}
                </p>
            </form>
        </Modal>
    );
}

export default Checkout;