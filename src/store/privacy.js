import { createSlice } from "@reduxjs/toolkit";

//DEFINED SLICE
const privacySlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducers: {
        toggle: (state) => {
            return state = !state;  //bs ye smjh ni aya ki yaha return kia pr counter me ni kia
        }
    }
});

export const privacyActions = privacySlice.actions;
export default privacySlice;