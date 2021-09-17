import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Messages from '../components/Main/Messages/Messages'
import Notifications from '../components/Notifications/Notifications'
import Jobs from '../components/Jobs/Jobs'
import Network from '../components/Network/Network'
import Login from '../components/Login/Login'
import MainD from '../components/MainD/MainD'
import ProfilePage from '../components/ProfilePage/ProfilePage'
import Page404 from '../components/Main/Page404/Page404'
import BookmarkedPosts from '../components/Main/BookmarkedPosts/BookmarkedPosts'
import ProtectedRoutes from './ProtectedRoutes'
import Connections from '../components/Network/Connections/Connections'
import MyJobs from '../components/Jobs/MyJobs/MyJobs'
import Chat from '../components/Main/Messages/Chat'
import NewChat from '../components/Main/Messages/NewChat'
import PeopleIFollowFollowers from '../components/Network/PeopleIFollow/PeopleIFollowFollowers'
import PeopleIFollowFollowing from '../components/Network/PeopleIFollow/PeopleIFollowFollowing'
import InvitationManagerReceived from '../components/Network/InvitationManager/InvitationManagerReceived'
import InvitationManagerSent from '../components/Network/InvitationManager/InvitationManagerSent'
import Register from '../components/Register/Register'
import Forgot from '../components/ForgotPass/Forgot'
import OrganizationPage from '../components/OrganizationPage/OrganizationPage'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Login/>}/>
      <Route exact path="/signup" render={() => <Register/>}/>
      <Route exact path="/signup_g" render={() => <Register isByGoogle={true}/>}/>
      <Route exact path="/forgot" render={() => <Forgot/>}/>
      <ProtectedRoutes exact path="/home" render={() => <MainD/>}/>
      <ProtectedRoutes exact path="/network" render={() => <Network/>}/>
      <ProtectedRoutes exact path="/network/connections" render={() => <Connections/>}/>
      <ProtectedRoutes exact path="/network/following" render={() => <PeopleIFollowFollowing/>}/>
      <ProtectedRoutes exact path="/network/followers" render={() => <PeopleIFollowFollowers/>}/>
      <ProtectedRoutes exact path="/network/invitation_manager/received" render={() => <InvitationManagerReceived/>}/>
      <ProtectedRoutes exact path="/network/invitation_manager/sent" render={() => <InvitationManagerSent/>}/>
      <ProtectedRoutes exact path="/jobs" render={() => <Jobs/>}/>
      <ProtectedRoutes exact path="/jobs/my_jobs" render={() => <MyJobs/>}/>
      <ProtectedRoutes exact path="/messages" render={() => <Messages/>}/>
      <ProtectedRoutes exact path="/messages/:id" render={() => <Messages/>}/>
      <ProtectedRoutes exact path="/chat/:id" render={() => <Chat isSeparateChat={true}/>}/>
      <ProtectedRoutes exact path="/chat/new/:id" render={() => <NewChat isSeparateChat={true}/>}/>
      <ProtectedRoutes exact path="/notifications" render={() => <Notifications/>}/>
      <ProtectedRoutes exact path="/profiles/:id" component={ProfilePage}/>
      <ProtectedRoutes exact path="/organization" component={OrganizationPage}/>
      {/* <ProtectedRoutes exact path="/organization/:id" component={OrganizationPage}/> */}
      <ProtectedRoutes exact path="/bookmarked" render={() => <BookmarkedPosts/>}/>
      <ProtectedRoutes exact path="*" render={() => <Page404/>}/>
    </Switch>
  )
}

export default MainRoutes