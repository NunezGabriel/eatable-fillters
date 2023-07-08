import CategoryButton from "../../components/CategoryButton";
import FoodCard from "../../components/FoodCard";
import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { SiCashapp } from "react-icons/si";
import { BsDashLg } from "react-icons/bs";

const InputsContainer = styled.div`
  display: flex;
  border: 1px solid #fa4a0c;
  width: 102px;
  height: 36px;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  gap: 8px;
  padding: 8px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
`;

function CategoriesMain({ products }) {
  const categories = products.reduce((categories, currentProduct) => {
    const newCategory = currentProduct.category;

    if (categories.includes(newCategory)) return [...categories];
    return [...categories, newCategory];
  }, []);

  const [currentCategory, setCurrentCategory] = useState(null);

  const firstCategory = categories[0];

  useEffect(() => {
    setCurrentCategory(firstCategory);
  }, [firstCategory]);

  const filteredProducts = products.filter(
    (product) => product.category === currentCategory
  );

  const navigate = useNavigate();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);

  return (
    <Styled.Body>
      <Styled.CategoriesContainer>
        {categories.map((category) => {
          return (
            <CategoryButton
              key={category}
              active={category === currentCategory}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </CategoryButton>
          );
        })}
      </Styled.CategoriesContainer>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <InputsContainer>
          <SiCashapp color="#8E8E8E" fontSize={25} />
          <Input
            type="text"
            placeholder="min"
            onChange={(e) => {
              if (e.target.value == "") setMin(0);
              else setMin(e.target.value);
            }}
          />
        </InputsContainer>
        <BsDashLg color="#8E8E8E" />
        <InputsContainer>
          <SiCashapp color="#8E8E8E" fontSize={25} />
          <Input
            type="text"
            placeholder="max"
            onChange={(e) => {
              if (e.target.value == "") setMax(10000000);
              else setMax(e.target.value);
            }}
          />
        </InputsContainer>
      </div>
      <Styled.ProductsContainer>
        {filteredProducts
          .filter((product) => product.price >= min && product.price <= max)
          .map((product) => {
            return (
              <FoodCard
                key={product.id}
                name={product.name}
                picture_url={product.picture_url}
                price={product.price}
                onClick={() =>
                  navigate(`/products/${product.id}`, { replace: true })
                }
              />
            );
          })}
      </Styled.ProductsContainer>
    </Styled.Body>
  );
}

export default CategoriesMain;
