import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-color: ${colors.orange};
  ${typography.size.m}
  ${typography.weigth.semibold}
  color: ${colors.white};
  border: none;
  cursor: pointer;
  border-radius: 2rem;
  height: 70px;
  width: 314px;
  margin-top: 11rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

function Button(props) {
  return (
    <StyledButton {...props}>
      {props.Icon && <props.Icon />}
      {props.children}
    </StyledButton>
  );
}

export default Button;
