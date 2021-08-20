import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoutes = (props) => {
  const {...data} = props
  let initialToken = localStorage.getItem('token')

  return (initialToken) ? (<Route {...data} />) : (<Redirect to={{pathname: '/'}}/>)
}

export default ProtectedRoutes