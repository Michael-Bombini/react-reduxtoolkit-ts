import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
    },
    closeModal: (state) => {
      state.open = false;
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
