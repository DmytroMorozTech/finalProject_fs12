import React from 'react'
import { Route, Switch } from 'react-router-dom'
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

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Login/>}/>
      <ProtectedRoutes exact path="/home" render={() => <MainD/>}/>
      <ProtectedRoutes exact path="/network" render={() => <Network/>}/>
      <ProtectedRoutes exact path="/network/connections" render={() => <Connections/>}/>
      <ProtectedRoutes exact path="/jobs" render={() => <Jobs/>}/>
      <ProtectedRoutes exact path="/messages" render={() => <Messages/>}/>
      <ProtectedRoutes exact path="/messages/:id/" render={() => <Messages/>}/>
      <ProtectedRoutes exact path="/notifications" render={() => <Notifications/>}/>
      {/* <ProtectedRoutes exact path="/personal" render={() => <Profile/>}/> */}
      <ProtectedRoutes exact path="/profiles/:id" component={ProfilePage} />

      <ProtectedRoutes exact path="/bookmarked" render={() => <BookmarkedPosts/>}/>
      <ProtectedRoutes exact path="*" render={() => <Page404/>}/>
    </Switch>
  )
}

export default MainRoutes