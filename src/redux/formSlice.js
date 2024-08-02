// formSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  page: 1,
  formData: {
    address: "",
    propertyFor: "",
    street: "",
    state: "",
    country: "",
    postcode: "",
    city: "",
    propertyType: "",
    strataProperty: "",
    bedrooms: "",
    bathrooms: "",
    propertySize: "",
    landSize: "",
    livingRooms: "",
    carParking: "",
    additionalInfo: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { setPage, setFormData } = formSlice.actions;

export default formSlice.reducer;
