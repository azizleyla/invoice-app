import React from "react";
import { Formik } from "formik";

import styled from "styled-components";
import { createInvoiceStart } from "../redux/reducers/invoiceSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateInvoiceStyled = styled.form``;

function CreateInvoice() {
  // const [input]
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const createPost = (e) => {
    e.preventDefault();
  };

  return (
    <Formik
      initialValues={{ clientName: "", describtion: "", total: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        dispatch(createInvoiceStart(values));
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="clientName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            type="text"
            name="describtion"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            type="number"
            name="total"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button type="button" onClick={() => navigate("/")}>
            Back
          </button>
        </form>
      )}
    </Formik>
  );
}

export default CreateInvoice;
