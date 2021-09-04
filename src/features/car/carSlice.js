import { createSlice } from "@reduxjs/toolkit";
import cars from "./carInfo.json";
import carModels from "./carModel.json";

const initialState = {
  cars,
  carModels,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;
export const selectCarModels = (state) => state.car.carModels;

export default carSlice.reducer;
