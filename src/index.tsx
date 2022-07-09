import React from "react";
import "./index.css";
import App from "./App";
import store, {AppStateType} from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

// type RenderEntireTreeType = (state: AppStateType) => void;
//
// export const renderEntireTree: RenderEntireTreeType = (state) => {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                // state={state} dispatch={store.dispatch.bind(store)}
            />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
// }

// renderEntireTree(store.getState());
//
//
// store.subscribe(() => {
//     let state = store.getState()
//     renderEntireTree(state);
// });