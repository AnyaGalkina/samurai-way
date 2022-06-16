import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Main/Profile/Profile";
import Dialog from "./components/Main/Dialog/Dialog";
import {Route} from "react-router-dom";
import Settings from "./components/Main/Settings";
import Music from "./components/Main/Music";
import Developers from "./components/Main/Developers";
import News from "./components/Main/News";
import {addMessage, StateType, updateNewMessageText} from "./redux/state";

type PropsType = {
    state: StateType
    addPost: () => void;
    updateNewPostText: (newPostText: string) => void;
    addMessage: () => void;
    updateNewMessageText: (newMessageText: string) => void;
}

const App: React.FC<PropsType> = (props) => {
    return (
        <div className="app-wrapper">
            Hello, samurai! Let's go!
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                       />
                       }/>
                <Route path='/dialogs'
                       render={() => <Dialog
                           dialogsPage={props.state.dialogsPage}
                           addMessage={addMessage}
                           updateNewMessageText={updateNewMessageText}
                       />
                       }/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route exact path='/settings' render={() => <Settings/>}/>
                <Route path='/developers' render={() => <Developers/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;