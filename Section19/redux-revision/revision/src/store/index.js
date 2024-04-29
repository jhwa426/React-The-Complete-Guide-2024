import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// redux toolkit
const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        decrease(state, action) {
            state.counter -= action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});


// // redux reducer
// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }
//     // action payload
//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "decrease") {
//         return {
//             counter: state.counter - action.amount,
//             showCounter: state.showCounter,
//         }
//     }

//     if (action.type === "toggle") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }

//     return state;
// }

// redux 
// const store = createStore(counterReducer);



// redux toolkit



const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;


// when multiple reducers exist, 
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//     }
// });
