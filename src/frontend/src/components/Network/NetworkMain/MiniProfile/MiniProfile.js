import styles from './styles'
import { Link } from 'react-router-dom'
import Avatar from '../../../../shared/Avatar/Avatar'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import avatar from '../../../../temporaryImages/avatar.jpg'
import SharedButton from '../../../../shared/Button/SharedButton'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'

function MiniProfile (props) {
  const classes = styles()

  const {
    avatarUrl = avatar,
    fullName = 'George Lupin',
    positionAndCompany = 'Fullstack Developer — GlobalLogic',
    numberOfConnection = 1
  } = props

  const [removedMiniProfile, setRemovedMiniProfile] = useState(false)

  const handleCross = () => {
    setRemovedMiniProfile(!removedMiniProfile)
  }

  return (
    <div className={clsx(classes.miniProfile, removedMiniProfile ? classes.removed : '')}>
      <div className={classes.header}>
        <div className={classes.cross} onClick={handleCross}>
          <CloseIcon fontSize="inherit"/>
        </div>
        <Link exact to="/profile/:id" className={classes.link}>
          <div className={classes.avatar}>
            <Avatar avatarUrl={avatarUrl}/>
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
