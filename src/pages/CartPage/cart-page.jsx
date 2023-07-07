import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import CartCard from "../../components/CartCard/card-cart";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { localStorageKey } from "../../config";
import EmptyCart from "./empty-cart";

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 3.125rem;
  height: 100vh;
  flex-direction: column;
`;

const ContTotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19.3rem;
  height: 4.875rem;
  background-color: ${colors.orange};
  color: white;
  border-radius: 1.875rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  ${typography.weigth.semibold}
`;

const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 5%;
  margin: 0 auto;
  gap: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20;
  width: 100%;
`;
const TotalText = styled.p`
  ${typography.size.m}
`;
const TotalNumber = styled.p`
  ${typography.size.xl}
  ${typography.weigth.semibold}
`;

function CartPage({ handleOrderData }) {
  const products = JSON.parse(localStorage.getItem(localStorageKey));

  const { setTitle } = useOutletContext();
  useEffect(() => {
    setTitle("Cart");
  }, [setTitle]);
  const startValues = products?.map((product) => {
    return { id: product.id, price: product.price };
  });

  const totalPrice = startValues
    ?.map((value) => value.price)
    .reduce((a, b) => a + b);

  const [total, setTotal] = useState(totalPrice);
  const [first, setFirst] = useState(startValues);

  function handleChange(first, id, value, startValues) {
    const initial = startValues.find((data) => data.id === id);
    const selectedObj = first.find((data) => data.id === id);
    setFirst(() => {
      selectedObj.price = value;
      selectedObj.quantity = selectedObj.price / initial.price;
      return first;
    });
  }

  function handleTotal(first) {
    setTotal(first.map((obj) => obj.price).reduce((a, b) => a + b));
  }

  const DataCart = { first, total };

  return (
    <>
      {products ? (
        <CartContainer>
          <CardsContainer>
            {products.map((product) => (
              <CartCard
                key={product.id}
                handleChange={handleChange}
                product={product}
                first={first}
                handleTotal={handleTotal}
                initialValue={startValues}
              />
            ))}
          </CardsContainer>
          <FooterContainer>
            <ContTotalPrice>
              <TotalText>Total</TotalText>
              <TotalNumber>${(total / 100).toFixed(2)}</TotalNumber>
            </ContTotalPrice>
            <StyledButton
              to="/checkout"
              onClick={() => handleOrderData(DataCart)}
            >
              Checkout
            </StyledButton>
          </FooterContainer>
        </CartContainer>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default CartPage;
