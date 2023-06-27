import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalName: '',
};

const modalNameSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setNameModal: (state, action) => {
      state.modalName = action.payload;
    },
  },
});
export const { setNameModal } = modalNameSlice.actions;
export default modalNameSlice.reducer;