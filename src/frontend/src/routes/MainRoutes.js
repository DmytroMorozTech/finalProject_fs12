import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Messages from '../components/Main/Messages/Messages'
import Profile from '../components/Main/Profile/Profile'
import Notifications from '../components/Notifications/Notifications'
import Jobs from '../components/Jobs/Jobs'
import Network from '../components/Network/Network'
import Login from '../components/Login/Login'
import MainD from '../components/MainD/MainD'
import ProfilePage from '../components/ProfilePage/ProfilePage'
import Page404 from '../components/Main/Page404/Page404'
import SavedPosts from '../components/Main/SavedPosts/SavedPosts'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Login/>}/>
      {/* <Route exact path="/home" render={() => <Feed/>}/> */}
      <Route exact path="/home" render={() => <MainD/>}/>
      <Route exact path="/network" render={() => <Network/>}/>
      <Route exact path="/jobs" render={() => <Jobs/>}/>
      <Route exact path="/messages" render={() => <Messages/>}/>
      <Route exact path="/notifications" render={() => <Notifications/>}/>
      <Route exact path="/personal" render={() => <Profile/>}/>
      <Route exact path="/profile" render={() => <ProfilePage/>}/>
      <Route exact path="/bookmarked" render={() => <SavedPosts/>}/>
      <Route exact path="*" render={() => <Page404/>}/>
    </Switch>
  )
}

export default MainRoutes