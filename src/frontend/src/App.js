import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import {useDispatch, useSelector} from 'react-redux'
import { getAllPostsAction } from './redux/Post/postActions'
import { useEffect } from 'react'
import {getUserChatsAction} from './redux/Message/messageActions'
import {activeUserSelector} from './redux/User/userSelector'
import {allChats} from './redux/Message/messageSelector'

function App () {
  const dispatch = useDispatch()
  const activeUser = useSelector(activeUserSelector)

  useEffect(() => {
    dispatch(getAllPostsAction())
    dispatch(getUserChatsAction(activeUser.id))
  }, [dispatch, activeUser.id])

  return (
    <div className="App">
      <Header/>
      <MainRoutes/>
    </div>
  )
}

export default App
