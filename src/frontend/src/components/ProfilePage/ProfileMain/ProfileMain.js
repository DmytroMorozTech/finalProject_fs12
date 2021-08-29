import React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import CreateIcon from '@material-ui/icons/Create'
import style from './styles'
import { Hidden, Link } from '@material-ui/core'
import SharedButton from '../../../shared/Button/SharedButton'
import SmallDot from '../../../shared/SmallDot/SmallDot'
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {ADD_BACKGROUND_PHOTO, EDIT_INTRO} from '../../../redux/Modal/modalTypes'
import {useDispatch} from 'react-redux'
import clsx from 'clsx'

function ProfileMain (props) {
  const { numberOfConnections = 45, isEditable } = props
  const profile = props.profile
  const classes = style()
  const dispatch = useDispatch()
  const preventDefault = (event) => event.preventDefault()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div
          className={clsx(classes.photoIcon, !isEditable && classes.hidden)}
          onClick={() =>
            dispatch(toggleModalAction({modalType: ADD_BACKGROUND_PHOTO}))}>
          <PhotoCameraIcon fontSize="inherit" color={'primary'}/>
        </div>
      </div>
      <div>
        <div className={classes.row}>
          <Avatar src={profile.avatarUrl} alt={profile.fullName} className={classes.bigAvatar}/>
          <div
            className={clsx(!isEditable && classes.hidden)}
            onClick={() =>
              dispatch(toggleModalAction({modalType: EDIT_INTRO, profile: props.profile}))}>
            <CreateIcon className={classes.editName}/>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.leftPanel}>
            <Typography variant="h3">
              {profile.fullName}
            </Typography>
            <Typography variant="body1">
              {profile.headline}
            </Typography>
            <div className={classes.info}>
              <Typography variant="body1" color="secondary">
                {profile.city}, {profile.country}
              </Typography>
              <SmallDot/>
              <Link onClick={preventDefault}>
                <Typography variant="body1" color="primary" className={classes.bold}>
                  Contact info
                </Typography>
              </Link>
            </div>
            <div>
              <Link href="#" onClick={preventDefault}>
                <Typography variant="body1" color="primary" className={classes.bold}>
                  {numberOfConnections} connections
                </Typography>
              </Link>
            </div>
          </div>
          <div>
            <Hidden xsDown>
              <Typography variant="h5" className={classes.rightPanel}>
                <BusinessTwoToneIcon fontSize="large" color="secondary" className={classes.businessIcon}/>
                <span>{profile.positionAndCompany}</span>
              </Typography>
            </Hidden>
          </div>
        </div>
        <div>
          <SharedButton title="Open to"/>
          <SharedButton title="Add section" variant="outlined" color="secondary"/>
          <SharedButton title="More" variant="outlined" color="secondary"/>
        </div>
        <div className={classes.box}>
          <Link href="#" onClick={preventDefault} className={classes.column}>
            <Typography variant="body1" color="secondary" className={classes.bold}>Open to work</Typography>
            <Typography variant="body1" color="secondary">{profile.positionAndCompany}</Typography>
            <Typography variant="body1" color="primary" className={classes.bold}>See all details</Typography>
          </Link>
          <div className={clsx(!isEditable && classes.hidden)}>
            <CreateIcon fontSize="inherit" className={classes.createIcon}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain
