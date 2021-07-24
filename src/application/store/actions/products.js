import { getProducts } from '../../../common/services/products';
import actionTypes from './types';

export async function loadProducts() {
  const { data } = await getProducts();
  return {
    type: actionTypes.LOAD_PRODUCTS,
    payload: data.products
  };
}
