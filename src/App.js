import React from "react";
import { Sidebar, NavMobile } from "./components/shared/index";
import { Cart, Chat, Checkout, FAQS, Main, ProductList } from "./screens/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      {/*<NavMobile />*/}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/FAQS" element={<FAQS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
