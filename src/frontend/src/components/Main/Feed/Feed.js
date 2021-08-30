import React, { useCallback, useEffect } from 'react'
import styles from './styles'
import Post from './Post/Post'
import ShareBox from './ShareBox/ShareBox'
import {connect, useDispatch, useSelector} from 'react-redux'
import Preloader from '../../../shared/Preloader/Preloader'
import * as actions from '../../../redux/Post/postActionTypes'
import http from '../../../services/httpService'
import {activeUserSelector} from '../../../redux/User/userSelector'

function Feed (props) {
  const { type, loading = true, postsState, bookmarkedPostsState } = props
  const dispatch = useDispatch()
  const classes = styles()
  const activeUser = useSelector(activeUserSelector)

  const localState = (type === 'posts') ? postsState : bookmarkedPostsState
  const { postsList: posts, pagination } = localState
  const {pageNumber, pageSize, hasMore} = pagination

  const loadPosts = useCallback(() => {
    dispatch({ type: actions.LOADING_POSTS, payload: true })

    return http
      .get('api/posts',
        {
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }
        }
      )
      .then((result) => {
        const posts = result.data
        const headers = result.headers
        dispatch({ type: actions.SAVE_NEW_POSTS, payload: {posts, headers} })
        dispatch({ type: actions.LOADING_POSTS, payload: false })
      })
  }, [pageNumber, pageSize, dispatch])

  const loadBookmarkedPosts = useCallback(() => {
    dispatch({ type: actions.LOADING_POSTS, payload: true })

    return http
      .get('api/posts/bookmarked',
        {
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }
        }
      )
      .then((result) => {
        const posts = result.data
        const headers = result.headers
        dispatch({ type: actions.SAVE_NEW_BOOKMARKED_POSTS, payload: {posts, headers} })
        dispatch({ type: actions.LOADING_POSTS, payload: false })
      })
  }, [pageNumber, pageSize, dispatch])

  const load = (type === 'posts') ? loadPosts : loadBookmarkedPosts

  const loader = React.useRef(load)

  const observer = React.useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0]
        if (first.isIntersecting) {
          loader.current()
        }
      },
      { threshold: 1, rootMargin: '50px' }
    )
  )
  const [element, setElement] = React.useState(null)

  useEffect(() => {
    loader.current = load
  }, [load])

  useEffect(() => {
    const currentElement = element
    const currentObserver = observer.current

    if (currentElement) {
      currentObserver.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement)
      }
    }
  }, [element])

  return (
    <>
      {type === 'posts' &&
      <div className={classes.feed}>
        <ShareBox activeUser={activeUser}/>
        {posts.map(post => <Post key={post.id} post={post}/>)}
      </div>}

      {type === 'bookmarkedPosts' &&
      <div className={classes.feed}>
        {posts.map(post => <Post key={post.id} post={post}/>)}
      </div>}

      {loading && <Preloader/>}
      {!loading && hasMore && <p ref={setElement} style={{ background: 'transparent' }}/>}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.user.activeUser.id,
    postsState: state.posts,
    bookmarkedPostsState: state.posts.bookmarked,
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps, null)(Feed)
