import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {state} from "./redux/state";
// import {BrowserRouter} from "react-router-dom";
import {renderEntireTree} from "./render";

renderEntireTree(state);