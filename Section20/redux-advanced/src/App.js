import { useDispatch, useSelector } from "react-redux";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from "react";
import { uiAction } from "./store/ui-slice";
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from "./store/cart-action";

let isInitial = true;

function App() {
    const dispatch = useDispatch();

    const showCart = useSelector((state) => state.ui.cartIsVisible);

    const cart = useSelector((state) => state.cart);

    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
        // const sendCartData = async () => {
        //     dispatch(
        //         uiAction.showNotification({
        //             status: 'pending',
        //             title: 'Sending...',
        //             message: 'Sending cart data!',
        //         })
        //     );

        //     const response = await fetch(
        //         'https://react-http-95c6b-default-rtdb.firebaseio.com/',
        //         // "https://react-http-95c6b-default-rtdb.firebaseio.com/cart",
        //         {
        //             method: 'PUT',
        //             body: JSON.stringify(cart),
        //         }
        //     );

        //     if (!response.ok) {
        //         // dispatch(uiAction.showNotification({
        //         //     status: "error",
        //         //     title: "Error...",
        //         //     message: "Sending cart data failed",
        //         // }));
        //         throw new Error("Sending Cart data failed")
        //     }
        //     // const responseData = await response.json();
        // };

        // dispatch(uiAction.showNotification({
        //     status: "success",
        //     title: "Success...",
        //     message: "Sent cart data successfully!",
        // }));

        // if (isInitial) {
        //     isInitial = false;
        //     return;
        // }

        // sendCartData().catch((error) => {
        //     dispatch(
        //         uiAction.showNotification({
        //             status: 'error',
        //             title: 'Error!',
        //             message: 'Sending cart data failed!',
        //         })
        //     );
        // });
        dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
