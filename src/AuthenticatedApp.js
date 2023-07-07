import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ProductsProvider } from "./context/products-context";
import ProfilePage from "./pages/profile";

function AuthenticatedApp() {
  return (
    <ProductsProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </ProductsProvider>
  );
}

export default AuthenticatedApp;
