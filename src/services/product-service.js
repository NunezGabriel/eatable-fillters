import { tokenKey } from '../config';
import apiFetch from './api-fetch';

export const getProduct = async (id) => {
    const product = await apiFetch(`products/${id}`);
    return product;
};
