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
    addMotherboard: (state, action) => {
      state.Motherboard = action.payload;
      state.price += action.payload.Price;
    },
    addRam: (state, action) => {
      state.RAM = action.payload;
      state.price += action.payload.Price;
    },
    addPowerSupply: (state, action) => {
      state.powerSupply = action.payload;
      state.price += action.payload.Price;
    },
    addStorage: (state, action) => {
      state.storage = action.payload;
      state.price += action.payload.Price;
    },
    addMonitor: (state, action) => {
      state.Monitor = action.payload;
      state.price += action.payload.Price;
    },

    clearState: () => {
      state.Processor = null;
      state.Motherboard = null;
      state.RAM = null;
      state.powerSupply = null;
      state.storage = null;
      state.Monitor = null;
      state.price = 0;
    },
  },
});

export const {
  addProcessor,
  addMotherboard,
  addRam,
  addPowerSupply,
  addStorage,
  addMonitor,
  clearState,
} = builderSlice.actions;
export default builderSlice.reducer;
