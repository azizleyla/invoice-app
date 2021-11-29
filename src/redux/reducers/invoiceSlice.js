import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://invoices-app-api.herokuapp.com/api/v1/invoices";

const invoiceSlice = createSlice({
  name: "invoices",
  initialState: { invoices: [] },
  reducers: {
    loadInvoices(state, action) {
      state.invoices = action.payload.invoices;
    },
  },
});
export const { loadInvoices } = invoiceSlice.actions;
export const loadInvoicesStart = () => {
  return async function (dispatch) {
    const response = await axios.get(URL);
    const invoices = response.data.invoices;
    dispatch(loadInvoices({ invoices: invoices }));
  };
};
const invoiceReducer = invoiceSlice.reducer;
export default invoiceReducer;
