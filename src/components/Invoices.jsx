import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadInvoicesStart } from "../redux/reducers/invoiceSlice";
import SingleInvoice from "../components/SingleInvoice";

const Invoices = () => {
  const invoices = useSelector((state) => state.invoice.invoices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInvoicesStart());
  }, [dispatch]);

  return (
    <div>
      {invoices.map((invoice) => (
        <SingleInvoice key={invoice._id} {...invoice} />
      ))}
    </div>
  );
};

export default Invoices;
