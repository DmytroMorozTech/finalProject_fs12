import React, { useEffect } from 'react'
import Style from './styles'
import Post from './Post/Post'
import ShareBox from './ShareBox/ShareBox'
import { connect } from 'react-redux'
import { getAllPostsAction } from '../../../redux/Post/postActions'

function Feed (props) {
  const { activeUserId, getPostsForActiveUser, posts } = props
  const classes = Style()

  useEffect(() => {
  }, [posts])
  // this useEffect is needed to rerender Feed component if some data related to accounts changes in Redux store.

  return (
    <div className={classes.feed}>
      <ShareBox/>
      {posts.map(post => <Post key={post.id} post={post}/>)}
      {/* <Post/> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.user.activeUserId,
    posts: state.posts.postsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsForActiveUser: () => dispatch(getAllPostsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
