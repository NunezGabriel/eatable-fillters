import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../services/product-service";
import FoodDetail from "../components/FoodDetail";

const ProductDetail = () => {
  const { setTitle } = useOutletContext();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/");
  };

  useEffect(() => {
    setTitle("");
    getProduct(id).then(setProduct);
  }, [id, setTitle]);

  return <FoodDetail product={product} handleAddProduct={handleAddProduct} />;
};

export default ProductDetail;
