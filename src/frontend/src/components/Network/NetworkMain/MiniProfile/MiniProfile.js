import styles from './styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import Image from '../../../../shared/Image/Image'

function MiniProfile (props) {
  const classes = styles()

  const {
    avatarUrl = 'linkedin/avatars/p1qwriz6hzjgwkaihwpa',
    id = 3,
    fullName = 'Laura Lee',
    positionAndCompany = 'Senior Java Developer',
    numberOfConnection = 1
  } = props

  const [removedMiniProfile, setRemovedMiniProfile] = useState(false)

  const handleCross = () => {
    setRemovedMiniProfile(!removedMiniProfile)
  }

  const linkToUserProfile = '/profiles/' + id

  return (
    <div className={clsx(classes.miniProfile, removedMiniProfile ? classes.removed : '')}>
      <div className={classes.header}>
        <div className={classes.cross} onClick={handleCross}>
          <CloseIcon fontSize="inherit"/>
        </div>
        <Link to={linkToUserProfile} className={classes.link}>
          <div className={classes.avatarWrapper}>
            <Image
              imageUrl={avatarUrl || 'linkedin/general/ghrchekikx3dnas6ivxm'}
              alt={'user avatar'}
              className={classes.avatar}
              type={'extraLargeAvatar'}
            />
          </div>
          <Typography variant="h5" align="center" className={classes.name}>
            {fullName}
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center">
            {positionAndCompany}
          </Typography>
        </Link>
      </div>
      <div className={classes.connectionGroup}>
        <div className={classes.connection}>
          <RadioButtonUncheckedIcon fontSize="inherit"/>
          <RadioButtonUncheckedIcon fontSize="inherit" className={classes.icon}/>
          <Typography variant="h6" color="textSecondary" className={classes.connectionText}>
            {numberOfConnection} mutual connection
          </Typography>
        </div>
        <SharedButton title="Connect" variant="outlined" fullWidth={true}/>
      </div>
    </div>
  )
}

export default MiniProfile
