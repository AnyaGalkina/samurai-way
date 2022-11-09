import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ROUTES} from "../../enums/routes";
import ProfileContainer from "../Main/Profile/ProfileContainer";
import Preloader from "../common/Preloader/Preloader";
import News from "../Main/News/News";
import Music from "../Main/Music/Music";
import Settings from "../Main/Settings";
import Login from "../Login/Login";
import {DevelopersContainer} from "../Main/Users/DevelopersContainer";
import DialogContainer from "../Main/Dialog/DialogContainer";
import styles from "./ContentApp.module.css";
import {Content} from "antd/lib/layout/layout";




type PropsType = { userId: number | null }

export const ContentApp = ({userId}: PropsType) => {
    return (
        // <Content>
            <div className ={styles.contentContainer}>
                <Switch>
                    <Route exact path={"/"}
                           render={() => <Redirect to={`/profile/${userId}`}/>}
                    />
                    <Route
                        path={ROUTES.PROFILE}
                        render={() => <ProfileContainer/>
                        }
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
        // </Content>
    );
};
