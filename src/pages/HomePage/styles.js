import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Message = styled.span`
  ${typography.size.xl}
  ${typography.weigth.semibold}
`;
export const CartButton = css`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${colors.gray};

  &:hover {
    color: ${colors.orange};
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.125rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap: 1.375rem;
  height: calc(100vh - 251px);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 281px);
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
  justify-items: center;
  align-content: flex-start;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
