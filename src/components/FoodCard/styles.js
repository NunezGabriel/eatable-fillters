import styled from "@emotion/styled";
import { colors, shadow } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  `
export const ProductInfo = styled.div`
  position: relative;
  width: 156px;
  height: 212px;
  border-radius: 30px;
  padding: 0.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  background-color: white;
  box-shadow: ${shadow.itemCard};
`;

export const Title = styled.h2`
  ${typography.size.l}
  ${typography.weigth.semibold}
  text-align: center;
`;

export const Price = styled.span`
  ${typography.size.l}
  ${typography.weigth.semibold}
  color: ${colors.orange}
`
export const Spacing = styled.div`
  height: 38px;
`