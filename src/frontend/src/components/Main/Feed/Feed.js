import React from 'react'
import Style from './styles'
import Post from './Post/Post'
import ShareBox from './ShareBox/ShareBox'

function Feed () {
  const classes = Style()
  return (
    <div className={classes.feed}>
      <h1 className={classes.text}>
      Welcome to the Home page!
      </h1>
      <ShareBox/>
      <Post/>
    </div>
  )
}

export default Feed
