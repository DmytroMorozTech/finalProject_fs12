import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {activeUserSelector, userAuthenticationSelector} from '../redux/User/userSelector'

const ProtectedRoutes = (props) => {
  const {...data} = props
  // let initialToken = localStorage.getItem('token')
  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser.id

  return (activeUserId) ? (<Route {...data} />) : (<Redirect to={{pathname: '/'}}/>)
}

export default ProtectedRoutes