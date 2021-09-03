import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {userAuthenticationSelector} from '../redux/User/userSelector'

const ProtectedRoutes = (props) => {
  const {...data} = props
  // let initialToken = localStorage.getItem('token')
  const authenticated = useSelector(userAuthenticationSelector)
  console.log(authenticated)

  return (authenticated) ? (<Route {...data} />) : (<Redirect to={{pathname: '/'}}/>)
}

export default ProtectedRoutes