import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Feed from '../components/Main/Feed/Feed'
import Messages from '../components/Main/Messages/Messages'
import Profile from '../components/Main/Profile/Profile'
import Notifications from '../components/Notifications/Notifications'
import Jobs from '../components/Jobs/Jobs'
import Network from '../components/Network/Network'
import Login from '../components/Login/Login'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Login/>}/>
      <Route exact path="/home" render={() => <Feed/>}/>
      <Route exact path="/network" render={() => <Network/>}/>
      <Route exact path="/jobs" render={() => <Jobs/>}/>
      <Route exact path="/messages" render={() => <Messages/>}/>
      <Route exact path="/notifications" render={() => <Notifications/>}/>
      <Route exact path="/personal" render={() => <Profile/>}/>
      {/* <Route exact path="*" render={() => <NotFound/>}/> */}
    </Switch>
  )
}

export default MainRoutes