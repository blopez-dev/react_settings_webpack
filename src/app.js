import React from 'react';
import { Provider } from 'react-redux';
import createStore from './application/store';
import Products from "./Products";

function App() {
  return (
    <Provider store={createStore()}>
        <Products />
    </Provider>
  );
}
export default App;
