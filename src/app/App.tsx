import React, {useEffect} from 'react';
import './App.css';
import {Link, NavLink} from 'react-router-dom';
import HeaderContainer from '../common/components/Header/HeaderContainer';
import {useDispatch, useSelector} from 'react-redux';
import {initializeApp} from './app-reducer';
import {AppStateType} from './redux-store';
import Preloader from '../common/components/Preloader/Preloader';
import {ROUTES} from '../common/enums/routes';
import 'antd/dist/antd.css';
import {
    BugOutlined,
    RocketOutlined,
    UsergroupAddOutlined,
    NotificationOutlined,
    UserOutlined,
    AuditOutlined,
    CommentOutlined,
    CustomerServiceOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import smLogo from '../assets/images/logo/sm-logo.png';
import {ContentApp} from '../common/components/Content/ContetntApp';
import {ErrorMessage} from '../common/components/ErrorMessage/ErrorMessage';

const {Header, Sider} = Layout;
const {SubMenu, Item} = Menu;


export const DialogContainer = React.lazy(() => import('../features/Dialog/DialogContainer'))
export const ChatPage = React.lazy(() => import('../features/Chat/Chat'));


const App = () => {
    const dispatch = useDispatch();
    const userId = useSelector<AppStateType, number | null>(state => state.auth.userId);
    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized);
    const globalError = useSelector<AppStateType, string>(state => state.app.globalError);


    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch])

    return (
        <>
            {
                !initialized
                    ? <Preloader/>
                    : <Layout>
                        <></>
                        <Sider
                            breakpoint="lg"
                            collapsedWidth="50"
                            onBreakpoint={broken => {
                                console.log(broken);
                            }}
                            onCollapse={(collapsed, type) => {
                                console.log(collapsed, type);
                            }}
                        >
                            <div className="logo">
                                <img src={smLogo} alt={'logo'} style={{width: '200px', height: '80px'}}/>
                            </div>
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Item key="1" icon={<AuditOutlined/>}> <Link
                                        to={`/profile/${userId}`}>Profile</Link></Item>
                                    <Item key="2" icon={<CommentOutlined/>}> <NavLink
                                        to={ROUTES.DIALOGS}> Messages</NavLink></Item>
                                    <Item key="3" icon={<CustomerServiceOutlined/>}> <NavLink
                                        to={ROUTES.MUSIC}> Music</NavLink></Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<BugOutlined/>} title="Developers">
                                    <Item key="5" icon={<UsergroupAddOutlined/>}> <Link to={ROUTES.USERS}>All</Link></Item>
                                    {/* <Item> Followed </Item>
                                      <Item> Unfollowed </Item> */}
                                </SubMenu>
                                <SubMenu key="sub3" icon={<CommentOutlined/>} title="Chat">
                                    <Item key="6" icon={<CommentOutlined/>}> <Link to={ROUTES.CHAT}>Chat</Link> </Item>
                                </SubMenu>
                                <SubMenu key="sub4" icon={<NotificationOutlined/>} title="News">
                                    <Item key="7" icon={<RocketOutlined/>}><Link to={ROUTES.NEWS}>TechCrunch News</Link>
                                    </Item>
                                </SubMenu>

                            </Menu>

                        </Sider>
                        <Layout className="site-layout">
                            <Header
                                style={{padding: '0 50px', backgroundColor: '#dfe4e6', height: '80px'}}>
                                <HeaderContainer/>
                            </Header>
                            {globalError && <ErrorMessage />}
                            <ContentApp userId={userId}/>
                        </Layout>
                    </Layout>
            }
        </>
    )
}


export default App;