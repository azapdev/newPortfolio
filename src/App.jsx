import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import Index from "./layout/Index";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </StrictMode>
  );
}
