import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {},
  reducers: {
    modalInfo: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { modalInfo } = modalSlice.actions;
export const modalSubscribe = (state) => state.modal;
export default modalSlice.reducer;
