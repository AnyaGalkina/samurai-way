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
// import {addMessage, StateType, updateNewMessageText} from "./redux/state";
import {ActionType, StateType, StoreType} from "./redux/state";


type PropsType = {
    // store: StoreType;
    state: StateType;
    dispatch:(action: ActionType) => void
    // addPost: () => void;
    // updateNewPostText: (newPostText: string) => void;
    // addMessage: () => void;
    // updateNewMessageText: (newMessageText: string) => void;
}

const App: React.FC<PropsType> = (props) => {

    // let state = props.store.getState();

    return (
        <div className="app-wrapper">
            Hello, samurai! Let's go!
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                           // addPost={props.store.addPost.bind(props.store)}
                           // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                       />
                       }/>
                <Route path='/dialogs'
                       render={() => <Dialog
                           dialogsPage={props.state.dialogsPage}
                           dispatch={props.dispatch}
                       />
                       }/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route exact path='/settings' render={() => <Settings/>}/>
                <Route path='/developers' render={() => <Developers/>}/>
                <Route path='/*' render={()=> <div>404</div>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;