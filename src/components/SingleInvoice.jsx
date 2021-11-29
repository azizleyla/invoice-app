import React from "react";
import styled from "styled-components";

const SingleInvoiceStyled = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  margin-bottom: 10px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  li {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #7e88c3;
  }
`;

const SingleInvoice = ({ clientName, status, total, invoiceId, createdAt }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();
  return (
    <SingleInvoiceStyled>
      <ul>
        <li>{invoiceId}</li>
        <li>{formattedDate}</li>
        <li>{clientName}</li>
        <li>{total}</li>
        <button>{status}</button>
      </ul>
    </SingleInvoiceStyled>
  );
};

export default SingleInvoice;
