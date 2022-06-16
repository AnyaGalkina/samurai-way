import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updateNewPostText, addMessage,updateNewMessageText, StateType} from "./redux/state";
import React from "react";

type RenderEntireTreeType = (state: StateType) => void;

export const renderEntireTree: RenderEntireTreeType = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}