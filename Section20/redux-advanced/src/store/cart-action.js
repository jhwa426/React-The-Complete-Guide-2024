import { cartAction } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-http-95c6b-default-rtdb.firebaseio.com/',
            );

            if (!response.ok) {
                throw new Error("Could not fetch cart data!")
            }

            const data = await response.json();

            return data;
        }
        try {
            const cartData = await fetchData();

            dispatch(cartAction.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));

        } catch (error) {
            dispatch(uiAction.showNotification({
                status: "error",
                title: "Error...",
                message: "Fetching cart data failed",
            }));
        }
    }
}

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-http-95c6b-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cartData.items,
                        totalQuantity: cartData.totalQuantity,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Sending Cart data failed")
            }
        }

        try {
            await sendRequest();

            dispatch(uiAction.showNotification({
                status: "success",
                title: "Success...",
                message: "Sent cart data successfully!",
            }));

        } catch (error) {
            dispatch(uiAction.showNotification({
                status: "error",
                title: "Error...",
                message: "Sending cart data failed",
            }));
        }
    }
}