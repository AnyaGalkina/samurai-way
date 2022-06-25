import React from 'react';
import './index.css';
import App from './App';
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

type RenderEntireTreeType = () => void;

export const renderEntireTree: RenderEntireTreeType = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
//??
renderEntireTree();
//??
store.subscribe(renderEntireTree);