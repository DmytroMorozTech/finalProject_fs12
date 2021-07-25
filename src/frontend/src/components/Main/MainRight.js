import React from 'react'
import {StyleMainRight} from './StyleMainRight'

function MainRight () {
  const classes = StyleMainRight()

  return (
    <div className={classes.mainRight}>
      <div className={classes.follow_card}>
        <div className={classes.follow_card__title}>
          <h2>Add to your feed</h2>
        </div>
      </div>
    </div>
  )
}

export default MainRight