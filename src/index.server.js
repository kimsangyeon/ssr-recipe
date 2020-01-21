import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import {StaticRouter} from 'react-router-dom'; // props location에 따라 라우팅 해주는 라우터
import App from './App';

const app = express();

// 서버 사이드 랜더링을 처리할 핸들러
const serverRender = (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 랜더링을 해줍니다.
  
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx);
  res.send(root);
};

app.use(serverRender);

app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});