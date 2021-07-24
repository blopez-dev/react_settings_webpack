import http from '../adapters/http';

export const getProducts = () => http.get('./products');
