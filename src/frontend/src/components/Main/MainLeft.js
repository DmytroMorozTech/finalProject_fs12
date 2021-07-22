import React from 'react'
import {StyleMainLeft} from './StyleMainLeft'

function MainLeft () {
  const classes = StyleMainLeft()

  return (
    <div classes={classes.container}>
      <div className={classes.profile_card}>
        <div className={classes.profile_info}>
          <div className={classes.profile_bg}>
            <a>
              <div className={classes.profile_pic}/>
              <link className>Ivan Ivanov</link>
            </a>
            <a>
              <div className={classes.profile_info__text}>Junior C++ Programmer</div>
            </a>
          </div>
        </div>
        <div className={classes.profile_widget}>
          <a>
            <div className={classes.profile_widget__span}>
              <span>Contacts</span>
              <span>Add your contacts here</span>
            </div>
            <img src="" alt=""/>
          </a>
        </div>
        <div className={classes.profile_item}>
          <span>
            <img src="" alt=""/>
                        My Code
          </span>
        </div>
      </div>
      <div className={classes.social_card}>
        <a>
          <span>Groups and communities</span>
        </a>
        <a>
          <span>Events and meetings</span>
          <img src="" alt=""/>
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