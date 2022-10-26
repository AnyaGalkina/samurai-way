import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {Redirect, Route, Switch} from "react-router-dom";
import Settings from "./components/Main/Settings";
import Music from "./components/Main/Music";
import News from "./components/Main/News";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import {DevelopersContainer} from "./components/Main/Users/DevelopersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {ROUTES} from "./components/common/enums/routes";

type MapStateToPropsType = {
    initialized: boolean
};
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type OwnProps = MapStateToPropsType & MapDispatchToPropsType;

const DialogContainer = React.lazy(() => import("./components/Main/Dialog/DialogContainer"))

class App extends React.Component<OwnProps> {
// class App extends React.Component<any> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return (<Preloader/>)
        }

        return (
            <div className="app-wrapper">
                Hello, samurai! Let's go!
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path={"/"}
                               render={() => <Redirect to={ROUTES.PROFILE}/>}
                        />
                        <Route path={ROUTES.PROFILE}
                               render={() => <ProfileContainer/>}
                        />
                        <Route path={ROUTES.DIALOGS}
                               render={() => <React.Suspense fallback={<Preloader/>}>
                                   <DialogContainer/>
                               </React.Suspense>}
                        />
                        <Route path={ROUTES.NEWS} render={() => <News/>}/>
                        <Route path={ROUTES.MUSIC} render={() => <Music/>}/>
                        <Route exact path={ROUTES.SETTINGS} render={() => <Settings/>}/>
                        <Route exact path={ROUTES.LOGIN} render={() => <Login/>}/>
                        <Route path={ROUTES.USERS} render={() => <DevelopersContainer/>}/>
                        <Route path={ROUTES.PAGE_NOT_FOUND} render={() => <div>404</div>}/>
                        <Route path="/*" render={() => <Redirect to={ROUTES.PAGE_NOT_FOUND}/>}/>
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