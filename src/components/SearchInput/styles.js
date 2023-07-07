import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;

  &::placeholder {
    ${typography.size.s}
    color: ${colors.textGray}
  }

  &:focus {
    outline:none;
    border-bottom: 1px solid ${colors.orange};
    margin-bottom: -1px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;