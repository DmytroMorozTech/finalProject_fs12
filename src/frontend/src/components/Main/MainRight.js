import React from 'react'
import {StyleMainRight} from './StyleMainRight'

function MainRight () {
  const classes = StyleMainRight()

  return (
    <div className={classes.container}>
      <div className={classes.follow_card}>
        <div className={classes.follow_card__title}>
          <h2>Add to your feed</h2>
        </div>
        <div className={classes.follow_card__news_list}>
          <li className={classes.news_list__li}>
            <a>
              <div className={classes.profile_pic}/>
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default MainRight