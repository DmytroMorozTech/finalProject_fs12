import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import { connect } from 'react-redux'
import { getAllPostsAction } from './redux/Post/postActions'
import { useEffect } from 'react'

function App (props) {
  const { getPostsForActiveUser } = props

  useEffect(() => {
    getPostsForActiveUser()
  }, [getPostsForActiveUser])

  return (
    <div className="App">
      <Header/>
      <MainRoutes/>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     loadingCustomers: state.posts.loading
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsForActiveUser: () => dispatch(getAllPostsAction())
  }
}

export default connect(null, mapDispatchToProps)(App)
