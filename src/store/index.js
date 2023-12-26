import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

// //DEFINED SLICE
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {counterVal : 0},
//     reducers: {
//         increment: (state) => {
//             state.counterVal++;
//         },
//         decrement: (state) => {
//             state.counterVal--;
//         },
//         add: (state , action) => {
//             state.counterVal += Number(action.payload.num);
//         },
//         subtract: (state , action) => {
//             state.counterVal -= Number(action.payload);
//         }
//     }
// });

// const privacySlice = createSlice({
//     name: 'privacy',
//     initialState: false,
//     reducers: {
//         toggle: (state) => {
//             return state = !state;
//         }
//     }
// });

//CREATED STORE
const counterStore = configureStore({reducer: {
    counter: counterSlice.reducer,      //counter kahi bhi use kro jiska reducer counterSlice h
    privacy: privacySlice.reducer       //privacy kahi bhi use kro jiska reducer privacySlice h
}});

//NAMED EXPORT
// export const counterActions = counterSlice.actions;
// export const privacyActions = privacySlice.actions;
//DEFAULT EXPORT
export default counterStore;
