// src/store/builderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const builderSlice = createSlice({
  name: "builder",
  initialState: {
    price: 0,
    Processor: null,
    Motherboard: null,
    RAM: null,
    powerSupply: null,
    storage: null,
    Monitor: null,
  },
  reducers: {
    addProcessor: (state, action) => {
      state.Processor = action.payload;
      state.price += action.payload.Price;
    },
  },
});

export const { addComponent, addProcessor } =
  builderSlice.actions;
export default builderSlice.reducer;
