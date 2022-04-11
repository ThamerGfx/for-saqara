import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'
import Lists from './Lists';

export default function Home() {
  return (
    <Provider store={store}>
    <React.StrictMode>
      <Lists />
    </React.StrictMode>
  </Provider>
  );
}
