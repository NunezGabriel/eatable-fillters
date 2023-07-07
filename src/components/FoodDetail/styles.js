import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

export const Image = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;

export const Product = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

export const Price = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fa4a0c;
`;
