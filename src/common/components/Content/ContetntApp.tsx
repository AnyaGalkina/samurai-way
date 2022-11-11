import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../enums/routes';
import ProfileContainer from '../../../features/Profile/ProfileContainer';
import Preloader from '../Preloader/Preloader';
import News from '../../../features/News/News';
import Music from '../../../features/Music/Music';
import Settings from '../../../features/Settings';
import Login from '../../../features/Login/Login';
import {DevelopersContainer} from '../../../features/Users/DevelopersContainer';
import {DialogContainer} from '../../../app/App';
import styles from './ContentApp.module.css';
import {ChatPage} from '../../../app/App';


type PropsType = { userId: number | null }

export const ContentApp = ({userId}: PropsType) => {
    return (
        // <Content>
        <div className={styles.contentContainer}>
            <Switch>
                <Route exact path={'/'}
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
                <Route path={ROUTES.CHAT} render={() => <React.Suspense fallback={<Preloader/>}>
                    <ChatPage/>
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
