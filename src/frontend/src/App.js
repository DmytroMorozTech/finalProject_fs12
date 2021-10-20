import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {getActiveUserAction} from './redux/User/userActions'
import {isLoadingUserSelector} from './redux/User/userSelector'
import Preloader from './shared/Preloader/Preloader'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {connect} from './utils/ws'

toast.configure()

function App () {
  const dispatch = useDispatch()
  const isLoadingUser = useSelector(isLoadingUserSelector)

  useEffect(() => {
    dispatch(getActiveUserAction())
  }, [dispatch])

  useEffect(() => {
    connect()
  }, [])

  return isLoadingUser ? <Preloader fullscreen={true}/> : (
    <div>
      <Header/>
      <MainRoutes/>
    </div>
  )
}

export default App
