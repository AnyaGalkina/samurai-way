import React from "react";
import "./index.css";
import App from "./app/App";
import store from "./app/redux-store"
import {HashRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);