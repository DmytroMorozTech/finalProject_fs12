import Typography from '@material-ui/core/Typography'
import React from 'react'
import styles from './styles'
import Image from '../../../../shared/Image/Image'

function NoNotificationsAvailable () {
  const classes = styles()

  const noNotificationsImg = <Image
    imageUrl={'linkedin/general/mrtvwl5vxbu7hzi5m2sc'}
    alt={'no notifications'}
    className={classes.noNotificationsImg}
    type={'largeAvatar'}
  />

  return (
    <div className={classes.notification}>
      {noNotificationsImg}
      <div className={classes.content}>
        <Typography variant="body1">
          <span className={classes.headerText}>At the moment, there are no notifications for you.</span>
        </Typography>
      </div>

    </div>
  )
}

export default NoNotificationsAvailable
