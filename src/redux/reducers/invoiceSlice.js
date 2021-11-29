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
export const createInvoiceStart = (values) => {
  return async function (dispatch) {
    // const response = await axios.post(URL);
    await axios.post(URL, {
      createdAt: "2021-11-05",
      paymentDue: "2021-11-12",
      description: "September",
      paymentTerms: 7,
      clientName: values.clientName,
      clientEmail: "",
      status: "draft",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      items: [
        {
          name: "Logo Re-design",
          quantity: 1,
          price: 3102.04,
          total: 3102.04,
        },
      ],
      total: 3102.04,
    });
  };
};

const invoiceReducer = invoiceSlice.reducer;
export default invoiceReducer;
