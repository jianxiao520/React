import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Index from './pages/index';

// 日志
import logger from 'redux-logger';
// 开发调试工具
import { composeWithDevTools } from 'redux-devtools-extension';
// 中间件
import thunk from 'redux-thunk';
// 路由
import { BrowserRouter as Router } from 'react-router-dom';
// 处理 Token
import verifyJwtToken from './service/indexService';


// 创建 Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

verifyJwtToken(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Index />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

