import Types from '../actions/types';

function products(state = {}, action) {
  switch (action.type) {
    case Types.LOAD_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
export const selectProducts = (state) => state.products;

export default products;
