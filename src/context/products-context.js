import { createContext, useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getproducts } from "../services/products-service";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    getproducts()
      .then(data => setProducts(data))
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
};

export function useProducts() {
  return useContext(ProductsContext);
};
