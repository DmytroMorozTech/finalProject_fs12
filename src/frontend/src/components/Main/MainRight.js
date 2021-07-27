import React from 'react'
import StyleMainRight from './StyleMainRight'

function MainRight () {
  const classes = StyleMainRight()

  return (
    <div className={classes.container}>
      <div className={classes.followCard}>
        <div className={classes.followCardTitle}>
          <h2>Add to your feed</h2>
        </div>
        <div className={classes.followCardNewsList}>
          <li className={classes.newsListItems}>
            <a>
              <div className={classes.newsPic}/>
            </a>
            <div className={classes.newsListItem}>
              <span className={classes.text}>#LinkedIn</span>
              <button className={classes.btnNewsListItem}>Follow</button>
            </div>
          </li>
          <li className={classes.newsListItems}>
            <a>
              <div className={classes.newsPic}/>
            </a>
            <div className={classes.newsListItem}>
              <span className={classes.text}>#Video</span>
              <button className={classes.btnNewsListItem}>Follow</button>
            </div>
          </li>
        </div>
        <div className={classes.recommendations}>
          <span className={classes.recommendationsText}>View All Recommendations</span>
        </div>
      </div>
    </div>
  )
}

export default MainRight