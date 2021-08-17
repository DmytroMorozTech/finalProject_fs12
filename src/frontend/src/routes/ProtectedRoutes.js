import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {hasAuthenticationSelector} from '../redux/User/userSelector'

const ProtectedRoutes = (props) => {
  const isAuthenticated = useSelector(hasAuthenticationSelector)
  const {...data} = props

  return isAuthenticated ? (<Route {...data} />) : (<Redirect to={{pathname: '/'}}/>)
}

export default ProtectedRoutes