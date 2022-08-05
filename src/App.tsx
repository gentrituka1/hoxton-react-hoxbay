import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Basket } from "./pages/Basket";
import { Categories } from "./pages/Categories";
import { CategoriesItems } from "./pages/CategoriesItems";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/products" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoriesItems />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
