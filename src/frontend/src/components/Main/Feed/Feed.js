import React, { useCallback, useEffect } from 'react'
import styles from './styles'
import Post from './Post/Post'
import ShareBox from './ShareBox/ShareBox'
import { connect, useDispatch } from 'react-redux'
import Preloader from '../../../shared/Preloader/Preloader'
import * as actions from '../../../redux/Post/postActionTypes'
import http from '../../../services/httpService'

function Feed (props) {
  const { posts, pageNumber, pageSize, hasMore = true, loading = true, sortBy } = props
  const dispatch = useDispatch()
  const classes = styles()

  const load = useCallback(() => {
    console.log(`Load function has triggered!`)
    dispatch({ type: actions.LOADING_POSTS, payload: true })

    return http
      .get('api/posts',
        {
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
            sortBy: sortBy // so far this property is not used
          }
        }
      )
      .then((result) => result.data)
      .then((page) => {
        dispatch({ type: actions.SAVE_NEW_POSTS, payload: page })
        dispatch({ type: actions.LOADING_POSTS, payload: false })
      })
  }, [pageNumber, pageSize, sortBy, dispatch])

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
      <div className={classes.feed}>
        <ShareBox/>
        {posts.map(post => <Post key={post.id} post={post}/>)}
      </div>

      {loading && <Preloader/>}
      {!loading && hasMore && <p ref={setElement} style={{ background: 'transparent' }}/>}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.user.activeUser.id,
    posts: state.posts.postsList,
    loading: state.posts.loading,
    pageNumber: state.posts.pageNumber,
    pageSize: state.posts.pageSize,
    hasMore: state.posts.hasMore
  }
}

export default connect(mapStateToProps, null)(Feed)
