/** @jsxImportSource @emotion/react */
import * as Styled from "./styles";
import { toCamelCase } from "../../utils";

function CategoryButton({ children, active, ...rest }) {
  return (
    < Styled.Button
      css={active ? Styled.active : null}
      {...rest}
    >
      {toCamelCase(children)}
    </ Styled.Button>
  )
};

export default CategoryButton;