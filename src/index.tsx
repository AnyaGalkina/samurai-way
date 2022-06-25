import React from 'react';
import './index.css';
import App from './App';
import {StateType, store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

type RenderEntireTreeType = (state: StateType) => void;

export const renderEntireTree: RenderEntireTreeType = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state} dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
//??
renderEntireTree(store.getState());
//??
store.subscribe(renderEntireTree);