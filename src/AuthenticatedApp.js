import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ProductsProvider } from "./context/products-context";
import { useEffect, useState } from "react";
import { localStorageKey } from "./config";
import ProfilePage from "./pages/profile";

function AuthenticatedApp() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    setCartProducts(data ? data : []);
  }, []);

  function handleCart(newProduct) {
    const newCartProducts = [...cartProducts, newProduct];

    setCartProducts(newCartProducts);
    localStorage.setItem(localStorageKey, JSON.stringify(newCartProducts));
  }

  return (
    <ProductsProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products/:id"
            element={<ProductDetail onAddCart={handleCart} />}
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </ProductsProvider>
  );
}

export default AuthenticatedApp;
