import React from 'react'
import StyleMain from './StyleMain'
import {MainRight} from './MainRight'
import {MainLeft} from './MainLeft'
import {Feed} from './Feed/Feed'

function Main () {
  const classes = StyleMain()

  return (
    <div className={classes.mainContainer}>
      <MainLeft/>
      <Feed/>
      <MainRight/>
    </div>
  )
}

export default Main