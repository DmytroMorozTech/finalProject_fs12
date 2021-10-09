import styles from './styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import Image from '../../../../shared/Image/Image'
import { createNewInvitationAction } from '../../../../redux/Network/networkActions'
import { useDispatch } from 'react-redux'

function MiniProfile (props) {
  const classes = styles()
  const dispatch = useDispatch()

  const {
    avatarPublicId,
    id,
    profileBgPublicId,
    fullName,
    positionAndCompany,
    numberOfMutualConnections = 3
    // TODO: this hardcode should be removed
  } = props.user

  const [removedMiniProfile, setRemovedMiniProfile] = useState(false)

  const handleCross = () => {
    setRemovedMiniProfile(!removedMiniProfile)
  }

  const linkToUserProfile = '/profiles/' + id

  return (
    <div className={clsx(classes.miniProfile, classes.smallScreen, removedMiniProfile ? classes.removed : '')}>
      <Image
        imageUrl={profileBgPublicId}
        className={classes.backgroundImage}
        type={'miniProfileBgImg'}
        alt={'profile background'}
      />
      <div className={classes.header}>
        <div className={classes.cross} onClick={handleCross}>
          <CloseIcon fontSize="inherit"/>
        </div>
        <Link to={linkToUserProfile} className={classes.link}>
          <div className={classes.avatarWrapper}>
            <Image
              imageUrl={avatarPublicId}
              alt={'user avatar'}
              className={classes.avatar}
              type={'extraLargeAvatar'}
            />
          </div>
          <Typography variant="h5" align="center" className={classes.name}>
            {fullName}
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center" className={clsx(classes.hidden, classes.position)}>
            {positionAndCompany}
          </Typography>
        </Link>
      </div>
      <div className={classes.connectionGroup}>
        <div className={classes.connection}>
          <RadioButtonUncheckedIcon fontSize="inherit"/>
          <RadioButtonUncheckedIcon fontSize="inherit" className={classes.icon}/>
          <Typography variant="h6" color="textSecondary" className={classes.connectionText}>
            {numberOfMutualConnections} mutual connection{numberOfMutualConnections > 1 && 's'}
          </Typography>
        </div>
        <SharedButton
          onClick={() => dispatch(createNewInvitationAction({userWhomId: id, fullName}))}
          title="Connect"
          variant="outlined"
          fullWidth={true}/>
      </div>
    </div>
  )
}

export default MiniProfile
