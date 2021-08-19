import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getActiveUserAction} from './redux/User/userActions'
import {isLoadingUserSelector} from './redux/User/userSelector'
import Preloader from './shared/Preloader/Preloader'

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