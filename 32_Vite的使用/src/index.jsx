import React from 'react';
// import ReactDom from 'react-dom';
import { createRoot }  from 'react-dom/client';
import ReactApp from './react/App.jsx';

// ReactDom.createRoot(<ReactApp/>, document.getElementById("app"));
// 新语法，焯！
createRoot(document.getElementById("reactapp")).render(<ReactApp/>);