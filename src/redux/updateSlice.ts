import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type UpdateState = {
  value: 'initial' | 'updated';
};

const initialState: UpdateState = {
  value: 'initial',
};

export const updateSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    update: (state) => {
      state.value = 'updated';
    },
    prev: (state) => {
      state.value = 'initial';
    },
  },
});

// Action creators are generated for each case reducer function
export const { update, prev } = updateSlice.actions;

export default updateSlice.reducer;
