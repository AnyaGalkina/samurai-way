import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Settings from "./components/Main/Settings";
import Music from "./components/Main/Music";
import News from "./components/Main/News/News";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import {DevelopersContainer} from "./components/Main/Users/DevelopersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {clearGlobalError, initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {ROUTES} from "./components/common/enums/routes";
import "antd/dist/antd.css";
import {BugOutlined, LaptopOutlined, NotificationOutlined, UserOutlined,} from "@ant-design/icons";
import {Breadcrumb, Layout, Menu} from "antd";
import smLogo from "./assets/images/logo/sm-logo.png";

const {Header, Sider, Content} = Layout;
const {SubMenu, Item} = Menu;

type MapStateToPropsType = {
    initialized: boolean;
    globalError: string
};
type MapDispatchToPropsType = {
    initializeApp: () => void;
    clearGlobalError: () => void
}
type OwnProps = MapStateToPropsType & MapDispatchToPropsType;

const DialogContainer = React.lazy(() => import("./components/Main/Dialog/DialogContainer"))

class App extends React.Component<OwnProps> {

    collapsed = false

    setCollapsed(newCollapsed: boolean) {
        this.collapsed = newCollapsed
    }

// class App extends React.Component<any> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return (<Preloader/>)
        }

        return (

            <Layout>
                <Sider trigger={null} collapsible collapsed={this.collapsed}>
            {/*<Layout className="site-layout-background" style={{ padding: '24px 0' }}>*/}
            {/*    <Sider className="site-layout-background" width={200}>*/}

                <div className="logo">
                        <img src={smLogo} alt={"logo"} style={{width: "200px", height: "80px"}}/>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                            <Item key="1"> <Link to={ROUTES.PROFILE}>Profile</Link></Item>
                            <Item key="2"> <NavLink to={ROUTES.DIALOGS}> Messages</NavLink></Item>
                            <Item key="3"> <NavLink to={ROUTES.MUSIC}> Music</NavLink></Item>
                            <Item key="4"> <NavLink to={ROUTES.SETTINGS}> Settings</NavLink> </Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<BugOutlined/>} title="Developers">
                            <Item key="5"> <Link to={ROUTES.USERS}>All</Link></Item>
                            {/* <Item> Followed </Item>
                  <Item> Unfollowed </Item> */}
                        </SubMenu>
                        <SubMenu key="sub3" icon={<LaptopOutlined/>} title="Chat">
                            {/*<Item key='6'> <Link to="/chat"> Chat</Link> </Item>*/}
                        </SubMenu>
                        <SubMenu key="sub4" icon={<NotificationOutlined/>} title="News">
                            <Item key="7"> <Link to={ROUTES.NEWS}> News</Link> </Item>
                        </SubMenu>

                    </Menu>

                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{padding: '0 50px', backgroundColor: "#dfe4e6", height: "80px"}}>
                        <HeaderContainer />
                    </Header>
                    {this.props.globalError
                        && <div style={{textAlign: "center", backgroundColor: "red"}}>
                            <span>{this.props.globalError}</span>
                            <button onClick={() => {
                                this.props.clearGlobalError();
                            }}>X
                            </button>
                        </div>}
                    <Content
                        style={{ padding: '0 50px'}}
                    >
                        <div className="site-layout-background"
                             style={{margin: "24px 16px", padding: 24, minHeight: "90vh"}}
                        >
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
                    </Content>
                </Layout>
            </Layout>




            // <div className="app-wrapper">
            //     <HeaderContainer/>
            //     <NavBar/>
            //     {this.props.globalError
            //         && <div style={{textAlign:"center", backgroundColor:"red"}}>
            //         <span>{this.props.globalError}</span>
            //         <button onClick={() => {this.props.clearGlobalError();}}>X</button>
            //     </div>}
            //     <div className="app-wrapper-content">
            //         <Switch>
            //             <Route exact path={"/"}
            //                    render={() => <Redirect to={ROUTES.PROFILE}/>}
            //             />
            //             <Route path={ROUTES.PROFILE}
            //                    render={() => <ProfileContainer/>}
            //             />
            //             <Route path={ROUTES.DIALOGS}
            //                    render={() => <React.Suspense fallback={<Preloader/>}>
            //                        <DialogContainer/>
            //                    </React.Suspense>}
            //             />
            //             <Route path={ROUTES.NEWS} render={() => <News/>}/>
            //             <Route path={ROUTES.MUSIC} render={() => <Music/>}/>
            //             <Route exact path={ROUTES.SETTINGS} render={() => <Settings/>}/>
            //             <Route exact path={ROUTES.LOGIN} render={() => <Login/>}/>
            //             <Route path={ROUTES.USERS} render={() => <DevelopersContainer/>}/>
            //             <Route path={ROUTES.PAGE_NOT_FOUND} render={() => <div>404</div>}/>
            //             <Route path="/*" render={() => <Redirect to={ROUTES.PAGE_NOT_FOUND}/>}/>
            //         </Switch>
            //     </div>
            //     <Footer/>
            // </div>
        )
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError
});

export default compose(connect(MapStateToProps, {initializeApp, clearGlobalError}))(App);