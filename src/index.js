import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import App from './App';
import { createStore, } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import ReactDOM from 'react-dom/client';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
