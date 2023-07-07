/** @jsxImportSource @emotion/react */
import SearchInput from "../../components/SearchInput";
import { FiShoppingCart } from "react-icons/fi"
import * as Styled from "./styles";
import CategoriesMain from "./categoriesMain";
import SearchMain from "./searchMain";
import { useProducts } from "../../context/products-context";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function HomePage() {
  const { setTitle } = useOutletContext();
  const [search, setSearch] = useState("");
  const products = useProducts();

  useEffect(() => {
    setTitle(null);
  }, [setTitle]);

  function handleSearch(event) {
    const { value } = event.target;
    setSearch(value)
  };

  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.Header>
        <SearchInput placeholder="Search" onChange={(handleSearch)} />
        <FiShoppingCart css={Styled.CartButton} onClick={() => navigate("/cart", { replace: true })} />
      </Styled.Header>
      {search === "" ?
        <CategoriesMain products={products} /> :
        <SearchMain products={products} search={search} />
      }
    </Styled.Container>
  )
};

export default HomePage;