import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage/cart-page";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CheckoutPage from "./pages/checkout-page";
import { ProductsProvider } from "./context/products-context";
import { useEffect, useState } from "react";
import { localStorageKey } from "./config";
import ProfilePage from "./pages/profile";

function AuthenticatedApp() {
  const [cartProducts, setCartProducts] = useState([]);
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    setCartProducts(data ? data : []);
  }, []);

  function handleCart(newProduct) {
    const newCartProducts = [...cartProducts, newProduct];

    setCartProducts(newCartProducts);
    localStorage.setItem(localStorageKey, JSON.stringify(newCartProducts));
  }

  function handleOrderData(value) {
    setOrderData(value);
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

          <Route
            path="/cart"
            element={<CartPage handleOrderData={handleOrderData} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage orderData={orderData} />}
          />
        </Route>
      </Routes>
    </ProductsProvider>
  );
}

export default AuthenticatedApp;
