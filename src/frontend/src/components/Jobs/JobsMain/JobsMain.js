import styles from './styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Vacancy from './Vacancy/Vacancy'
import SharedLinkSquare from '../../../shared/SharedLinkSquare/SharedLinkSquare'

function JobsMain () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <Typography variant="h3">
        Recommended for you
      </Typography>
      <Typography variant="h5" className={classes.regular}>
        Based on your profile and search history
      </Typography>
      <Vacancy/>
      <div className={classes.seeMoreBlock}>
        <SharedLinkSquare title='See more jobs' className={classes.seeMore}/>
      </div>
    </div>
  )
}

export default JobsMain
