import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Button = styled.button`
  background-color: inherit;
  border: none;
  padding: 13px;
  ${typography.size.s}
  color: ${colors.textGray};
  cursor: pointer;

  &:hover, &:focus {
    outline: none;
    color: ${colors.orange};
  }

  &:active {
    color: ${colors.orange};
    box-shadow: inset 0 -3px 0 ${colors.orange};
  }
`;

export const active = css`
  color: ${colors.orange};
  box-shadow: inset 0 -3px 0 ${colors.orange};
`;