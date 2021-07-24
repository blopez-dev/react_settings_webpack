import React from 'react';
import Product from '../Card/index';
import List from './style';

const Listing = ({ items }) => (
  <List>
    {items.map((item) => (
      <Product key={item.id} product={item} />
    ))}
  </List>
);

export default Listing;
