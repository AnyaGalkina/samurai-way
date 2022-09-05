import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {Route, Switch, withRouter} from "react-router-dom";
import Settings from "./components/Main/Settings";
import Music from "./components/Main/Music";
import News from "./components/Main/News";
import {DialogContainer} from "./components/Main/Dialog/DialogContainer";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import {DevelopersContainer} from "./components/Main/Users/DevelopersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
};
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type OwnProps = MapStateToPropsType & MapDispatchToPropsType;

class App extends React.Component<OwnProps> {
// class App extends React.Component<any> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return( <Preloader/>)
        }

        return (
            <div className="app-wrapper">
                Hello, samurai! Let's go!
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}
                        />
                        <Route path="/dialogs"
                               render={() => <DialogContainer/>}
                        />
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route exact path="/settings" render={() => <Settings/>}/>
                        <Route exact path="/login" render={() => <Login/>}/>
                        <Route path="/developers" render={() => <DevelopersContainer/>}/>
                        <Route path="/*" render={() => <div>404</div>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        )
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
});

export default compose(connect(MapStateToProps, {initializeApp}))(App);