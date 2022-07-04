import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Main/Profile/Profile";
import Dialog from "./components/Main/Dialog/Dialog";
import {Route, Switch} from "react-router-dom";
import Settings from "./components/Main/Settings";
import Music from "./components/Main/Music";
import Developers from "./components/Main/Developers";
import News from "./components/Main/News";
import {ActionType, AppState} from "./redux/redux-store";


type PropsType = {
    state: AppState;
    dispatch: (action: ActionType) => void
    // addPost: () => void;
    // updateNewPostText: (newPostText: string) => void;
    // addMessage: () => void;
    // updateNewMessageText: (newMessageText: string) => void;
}

const App: React.FC<PropsType> = (props) => {


    return (
        <div className="app-wrapper">
            Hello, samurai! Let's go!
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />
                           }/>
                    <Route path="/dialogs"
                           render={() => <Dialog
                               dialogsPage={props.state.dialogPage}
                               dispatch={props.dispatch}
                           />
                           }/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route exact path="/settings" render={() => <Settings/>}/>
                    <Route path="/developers" render={() => <Developers/>}/>
                    <Route path="/*" render={() => <div>404</div>}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;