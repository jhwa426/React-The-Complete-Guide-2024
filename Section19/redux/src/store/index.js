import { createStore } from 'redux';

export const INCREMENT = "increment";

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        // state.counter++;

        // return state;
        return { // must be override 
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        }
    }

    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }

    if (action.type === "reset") {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;