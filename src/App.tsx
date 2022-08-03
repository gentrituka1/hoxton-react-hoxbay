import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Basket } from "./pages/Basket";
import { Categories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";

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
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
