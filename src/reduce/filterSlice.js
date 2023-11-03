import { createSlice } from "@reduxjs/toolkit";

const filterInititalState = "";

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInititalState,
    reducers: {
        changeFilter(state, action) {
            return state = action.payload
        }
    },
})

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


