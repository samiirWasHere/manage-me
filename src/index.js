import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import MainRouter from './routes';
import './styles/index.css';
// import { store } from '@store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <Provider store={store}>
    <MainRouter />
//   </Provider>
);
