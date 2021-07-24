import React from 'react';
import { ProductWrapper } from './styles';

const Product = ({ product }) => {
  function handleAddItemToCart() {

  }
  return (
    <ProductWrapper>
      <div className="product--image">
        <img src={product.photo} alt={product.name} />
      </div>
      <div className="product--data">
        <h2 className="product--name">
          {product.name}
        </h2>
        <span className="product--price">{product.price}</span>
        <button type="button" className="product--add" onClick={handleAddItemToCart}>Add to cart</button>
      </div>

    </ProductWrapper>
  );
};

export default Product;
