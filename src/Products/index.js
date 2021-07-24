import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Listing from '../common/components/Listing';
import { loadProducts } from '../application/store/actions/products';
import { selectProducts } from '../application/store/reducers/products';

import WrapperHome from './style';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, []);

  return (
    products.length > 0
      ? (
        <div>
          <WrapperHome>
            <Listing items={products} />
          </WrapperHome>
        </div>
      ) : null
  );
};

export default Home;
