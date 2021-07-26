import { Button } from '@material-ui/core'
import React from 'react'
import {StyleMainRight} from './StyleMainRight'

function MainRight () {
  const classes = StyleMainRight()

  return (
    <div className={classes.mainRight}>
      <div className={classes.followCard}>
        <div className={classes.follow_cardTitle}>
          <h2>Add to your feed</h2>
        </div>
        <div className={classes.feedList}>
          <li className={classes.feedListItems}>
            <a>
              <div className={classes.feedListPic}></div>
            </a>
            <div className={classes.feedListItem}>
              <span>#LinkedIn</span>
              <Button className={classes.feedListItemBtn}>Follow</Button>
            </div>
          </li>
          <li className={classes.feedListItems}>
            <a>
              <div className={classes.feedListPic}></div>
            </a>
            <div className={classes.feedListItem}>
              <span>#Videos</span>
              <Button className={classes.feedListItemBtn}>Follow</Button>
            </div>
          </li>
        </div>
        <div className={classes.recommendations}>
          View all suggested recommendations
          <img src="" alt=""/>
        </div>
      </div>
      <div className={classes.bannerPart}>
        <img src="" alt=""/>
      </div>
    </div>
  )
}

export default MainRight