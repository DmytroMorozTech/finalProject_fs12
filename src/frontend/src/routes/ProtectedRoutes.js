import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {activeUserSelector, isLoadingUserSelector} from '../redux/User/userSelector'

const ProtectedRoutes = (props) => {
  const {...data} = props
  const activeUser = useSelector(activeUserSelector)
  const isUserLoading = useSelector(isLoadingUserSelector)
  // const dispatch = useDispatch()
  console.log(isUserLoading)

  // localStorage.setItem('current_path', data.path)
  return activeUser.id && !isUserLoading ? (<Route {...data} />) : (<Redirect to={{pathname: '/'}}/>)
}

export default ProtectedRoutes