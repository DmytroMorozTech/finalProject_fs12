import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getActiveUserAction} from './redux/User/userActions'
import {activeUserSelector, isLoadingUserSelector} from './redux/User/userSelector'
import Preloader from './shared/Preloader/Preloader'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {getUserChatsAction} from './redux/Message/messageActions'

toast.configure()
function App () {
  const dispatch = useDispatch()
  const isLoadingUser = useSelector(isLoadingUserSelector)

  useEffect(() => {
    dispatch(getActiveUserAction())
  })
  return isLoadingUser ? <Preloader/> : (
    <div className="App">
      <Header/>
      <MainRoutes/>
    </div>
  )
}
export default App