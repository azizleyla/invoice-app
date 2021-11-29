import Invoices from "./pages/Invoices";
import styled from "styled-components";
import SingleInvoice from "./components/SingleInvoice";
import CreateInvoice from "./pages/CreateInvoice";
import { Routes, Route } from "react-router-dom";

const AppStyled = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Invoices />} />
        <Route path="/post" element={<CreateInvoice />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
