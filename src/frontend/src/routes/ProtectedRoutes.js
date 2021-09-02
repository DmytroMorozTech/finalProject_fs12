import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {userAuthenticationSelector} from '../redux/User/userSelector'

const ProtectedRoutes = (props) => {
  const {...data} = props
  let initialToken = localStorage.getItem('token')
  const authenticated = useSelector(userAuthenticationSelector)
  console.log(authenticated)

  const getCookie = () => {
    const name = 'JSESSIONID'
    console.log(document.cookie)
    const cookieAr = document.cookie.split(';')
    console.log(cookieAr)
    for (let i = 0; i < cookieAr.length; i++) {
      let cookiePair = cookieAr[i].split('=')
      console.log(cookiePair)

      return name === cookiePair[0].trim()
    }
  }
  console.log(getCookie())

  return (authenticated && authenticated) ? (<Route {...data} />) : (<Redirect to={{pathname: '/'}}/>)
}

export default ProtectedRoutes