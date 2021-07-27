import React from 'react'
import StyleMainLeft from './styleMainLeft'

function MainLeft () {
  const classes = StyleMainLeft()

  return (
    <div className={classes.container}>
      <div className={classes.profileCard}>
        <div className={classes.profileInfo}>
          <div className={classes.profileBg}>
            <a>
              <div className={classes.profilePic}/>
              <link className={classes.profileLink}>Ivan Ivanov</link>
            </a>
            <a>
              <div className={classes.profileInfoText}>Junior C++ Programmer</div>
            </a>
          </div>
        </div>
        <div className={classes.profileWidget}>
          <a>
            <div className={classes.profileWidgetText}>
              <span>Contacts</span>
              <span>Add your contacts here</span>
            </div>
          </a>
        </div>
        <div className={classes.profileItem}>
          <span>
            My Code
          </span>
        </div>
      </div>
      <div className={classes.socialCard}>
        <a>
          <span>Groups and communities</span>
        </a>
        <a>
          <span>Events and meetings</span>
        </a>
        <a>
          <span>Followed hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </div>
    </div>
  )
}

export default MainLeft