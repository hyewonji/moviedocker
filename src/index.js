import React from 'react';
import ReactDOM from 'react-dom';
// './Components/App' 대신 'Components/App'를 써도 된다.
// jsconfig.json파일 때문에 기본적으로 scr에서 폴더를 찾게 하기 때문.
import App from 'Components/App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// reportWebVitals();
 