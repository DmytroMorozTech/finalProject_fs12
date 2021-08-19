import styles from './styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'

function JobsRight () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Ways to prepare
      </Typography>
      <div className={classes.bestPracticesBlock}>
        <div className={classes.bulb}>
          <EmojiObjectsIcon fontSize="inherit"/>
        </div>
        <div>
          <div>
            <Typography variant="h5" className={classes.bestPractices}>
              Best practices
            </Typography>
          </div>
          <div>
            <Typography variant="h6" className={classes.description}>
              Get the most out of your job search and stand out to recruiters
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsRight
