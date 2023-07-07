import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { FiShoppingCart } from "react-icons/fi";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptySubtitle = styled.p`
  ${typography.size.xl}
  ${typography.weigth.semibold}
`;

const IconEmpty = styled(FiShoppingCart)`
  width: 106px;
  height: 118px;
  color: ${colors.gray};
`;

function EmptyCart() {
  return (
    <EmptyContainer>
      <IconEmpty />
      <EmptySubtitle>No items in the cart</EmptySubtitle>
    </EmptyContainer>
  );
}

export default EmptyCart;
