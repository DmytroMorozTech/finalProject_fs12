import React from 'react'
import StyleNotifications from '../../Notifications/StyleNotifications'
import Post from './Post/Post'
import ShareBox from './ShareBox/ShareBox'

function Feed () {
  const classes = StyleNotifications()
  return (
    <div>
      <h1 className={classes.text}>
      Welcome to the Home page!
      </h1>
      <ShareBox/>
      <Post/>
    </div>
  )
}

export default Feed