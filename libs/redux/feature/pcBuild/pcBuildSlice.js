// src/store/builderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const builderSlice = createSlice({
  name: "builder",
  initialState: {
    Processor: [],
    Motherboard: [],
    RAM: [],
    powerSupply: [],
    storage: [],
    Monitor: [],
  },
  reducers: {
    addComponent: (state, action) => {
      const { category, component } = action.payload;
      state[category] = [...state[category], component];
    },
  },
});

export const { addComponent } = builderSlice.actions;
export default builderSlice.reducer;
