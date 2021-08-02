import React, { useEffect } from 'react'
import Style from './styles'
import Post from './Post/Post'
import ShareBox from './ShareBox/ShareBox'
import { connect } from 'react-redux'

function Feed (props) {
  const { posts } = props
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

export default connect(mapStateToProps, null)(Feed)
