import * as Styled from "./styles";
import FoodCard from "../../components/FoodCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptySearch from "./empty-search";

function SearchMain({ products, search }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const delayDebounce = setTimeout(() => {
      setResults(products.filter(product => {
        return product.name.split(" ")
          .map(productName => productName.toLowerCase())
          .includes(search.toLowerCase())
      }))
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delayDebounce)
  }, [search, products]);

  const navigate = useNavigate();

  return (
    <Styled.Body>
      {loading ? <Styled.Message>Searching...</Styled.Message> :
        results.length ?
          <Styled.SearchContainer>
            <Styled.Message>Found {results.length} results</Styled.Message>
            <Styled.ProductsContainer>
              {results.map(product => {
                return <FoodCard
                  key={product.id}
                  name={product.name}
                  picture_url={product.picture_url}
                  price={product.price}
                  onClick={() => navigate(`/products/${product.id}`, { replace: true })}
                />
              })}
            </Styled.ProductsContainer>
          </Styled.SearchContainer> :
          <EmptySearch />
      }
    </Styled.Body>
  )
}

export default SearchMain;