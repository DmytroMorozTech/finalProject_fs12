import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {activeUserSelector} from '../redux/User/userSelector'

const ProtectedRoutes = (props) => {
  const {...data} = props
  const activeUser = useSelector(activeUserSelector)

  return activeUser ? (<Route {...data} />) : (<Redirect to={{pathname: '/'}}/>)
}

export default ProtectedRoutes