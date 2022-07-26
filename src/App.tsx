import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {Route, Switch} from "react-router-dom";
import Settings from "./components/Main/Settings";
import Music from "./components/Main/Music";
import News from "./components/Main/News";
import {DialogContainer} from "./components/Main/Dialog/DialogContainer";
import {ProfileContainerWithConnect} from "./components/Main/Profile/ProfileContainer";
import {DevelopersContainer} from "./components/Main/Users/DevelopersContainer";


const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            Hello, samurai! Let's go!
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainerWithConnect />
                           }/>
                    <Route path="/dialogs"
                           render={() => <DialogContainer/>
                           }/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route exact path="/settings" render={() => <Settings/>}/>
                    <Route path="/developers" render={() => <DevelopersContainer />}/>
                    <Route path="/*" render={() => <div>404</div>}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;