import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import { FilterProvider, CartProvider } from "./context";
import { ScrollToTop } from "./components/index.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer closeButton={false} position="top-center" />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
