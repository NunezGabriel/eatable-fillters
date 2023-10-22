import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { shadow } from '../../styles/colors';

export const LayoutStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const Header = styled.header`
    position: relative;
    padding: 20px 0;
`;

export const Title = styled.h1`
    ${typography.size.l}
    ${typography.weigth.semibold}
    text-align: center;
`;

export const ItemsNav = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
`;
