import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  margin: 20px;
  padding: 5px;
  text-align: center;
  min-height: 320px;

  .product--image {
    img {
      display: block;
      max-width: 75%;
      margin: 0 auto;
    }
  }

  .product--data {
    .product--name {
      font-size: 15px;
      text-align: center;
      line-height: 24px;
    }

    .product--price {
      font-size: 20px;
      font-weight: bold;
    }

    .product--add {
      display:block;
      margin:10px auto;
      background-color: #1ea2e0;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 6px 15px;
    }
  }


`;
