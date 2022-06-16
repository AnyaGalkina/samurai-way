import React from 'react';
import './index.css';
import App from './App';
import {addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

type RenderEntireTreeType = () => void;

export const renderEntireTree: RenderEntireTreeType = () => {
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

renderEntireTree();

subscribe(renderEntireTree);