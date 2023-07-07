import FoodPicture from "../FoodPicture";
import { toCamelCase } from "../../utils";
import * as Styled from "./styles";

function FoodCard({ name, picture_url, price, ...rest }) {
  const formattedPrice = "$" + Intl.NumberFormat('en-US').format(price / 100);
  const formattedName = toCamelCase(name);

  return (
    <Styled.Container {...rest}>
      <Styled.Spacing />
      <Styled.ProductInfo >
        <FoodPicture
          style={{ top: -38, position: "absolute" }}
          url={picture_url}
          size="md"
          alt={name}
        />
        <Styled.Title>{formattedName}</Styled.Title>
        <Styled.Price>{formattedPrice}</Styled.Price>
      </Styled.ProductInfo>
    </Styled.Container>
  )
};

export default FoodCard;