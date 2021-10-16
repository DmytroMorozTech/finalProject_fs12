import React, { useCallback, useEffect } from 'react'
import styles from './styles'
import Post from './Post/Post'
import ShareBox from './ShareBox/ShareBox'
import {connect, useDispatch, useSelector} from 'react-redux'
import Preloader from '../../../shared/Preloader/Preloader'
import * as postActions from '../../../redux/Post/postActionTypes'
import * as notificationActions from '../../../redux/Notification/notificationActionTypes'
import {DELETE_COMMENTS_FOR_ALL_POSTS} from '../../../redux/Comment/commentActionTypes'
import http from '../../../services/httpService'
import {activeUserSelector} from '../../../redux/User/userSelector'
import Notification from '../../Notifications/NotificationsMain/Notification/Notification'
import NoNotificationsAvailable from '../../Notifications/NotificationsMain/Notification/NoNotificationsAvailable'

function Feed (props) {
  const { type, loading = true, postsState, bookmarkedPostsState, notificationsState } = props
  const dispatch = useDispatch()
  const classes = styles()
  const activeUser = useSelector(activeUserSelector)

  const localState = (type === 'posts') ? postsState : (type === 'bookmarkedPosts') ? bookmarkedPostsState : notificationsState

  let data
  let pagination
  if ((type === 'posts') || (type === 'bookmarkedPosts')) {
    data = localState.postsList
  } else if (type === 'notifications') {
    data = localState.notificationsList
  }
  pagination = localState.pagination
  const {pageNumber, pageSize, hasMore} = pagination

  const loadPosts = useCallback(() => {
    dispatch({ type: postActions.LOADING_POSTS, payload: true })

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
        dispatch({ type: postActions.SAVE_NEW_POSTS, payload: {posts, headers} })
        dispatch({ type: postActions.LOADING_POSTS, payload: false })
      })
  }, [pageNumber, pageSize, dispatch])

  const loadBookmarkedPosts = useCallback(() => {
    dispatch({ type: postActions.LOADING_POSTS, payload: true })

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
        dispatch({ type: postActions.SAVE_NEW_BOOKMARKED_POSTS, payload: {posts, headers} })
        dispatch({ type: postActions.LOADING_POSTS, payload: false })
      })
  }, [pageNumber, pageSize, dispatch])

  const loadNotifications = useCallback(() => {
    dispatch({ type: postActions.LOADING_POSTS, payload: true })

    return http
      .get(`api/notifications`,
        {
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }
        })
      .then((result) => {
        const notifications = result.data
        const headers = result.headers
        dispatch({ type: notificationActions.SAVE_NEW_NOTIFICATIONS, payload: {notifications, headers} })
        dispatch({ type: postActions.LOADING_POSTS, payload: false })
      })
  }, [pageNumber, pageSize, dispatch])

  const load = (type === 'posts') ? loadPosts : (type === 'bookmarkedPosts') ? loadBookmarkedPosts : loadNotifications

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

  useEffect(() => {
    dispatch({ type: postActions.RESET_POSTS })
    dispatch({ type: DELETE_COMMENTS_FOR_ALL_POSTS })
    dispatch({ type: notificationActions.RESET_NOTIFICATIONS })
  }, [dispatch])

  return (
    <>
      {type === 'posts' &&
      <div className={classes.feed}>
        <ShareBox activeUser={activeUser}/>
        {data.map(post => <Post key={post.id} post={post} feedType={'posts'}/>)}
      </div>}

      {type === 'bookmarkedPosts' &&
      <div className={classes.feed}>
        {data.map(post => <Post key={post.id} post={post} feedType={'bookmarkedPosts'}/>)}
      </div>}

      {type === 'notifications' && data &&
      <div className={classes.feed}>
        {data.map(notification => <Notification key={notification.id} notification={notification}/>)}
      </div>}

      {type === 'notifications' && data.length === 0 && !loading && <NoNotificationsAvailable/>}

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
    loading: state.posts.loading,
    notificationsState: state.notifications
  }
}

export default connect(mapStateToProps, null)(Feed)
