import React from 'react'
import Typography from '@material-ui/core/Typography'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import CreateIcon from '@material-ui/icons/Create'
import style from './styles'
import { Hidden, Link } from '@material-ui/core'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import SmallDot from '../../../shared/SmallDot/SmallDot'
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone'
import toggleModalAction from '../../../redux/Modal/modalActions'
import { EDIT_INTRO, UPLOAD_AVATAR_IMG, UPLOAD_PROFILE_BACKGROUND_IMG } from '../../../redux/Modal/modalTypes'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import Image from '../../../../src/shared/Image/Image'

function ProfileMain (props) {
  const { numberOfConnections, isEditable } = props
  const profile = props.profile
  const classes = style()
  const dispatch = useDispatch()
  const preventDefault = (event) => event.preventDefault()

  // const defaultBgUrl = 'url(https://res.cloudinary.com/dan-insta-step/image/upload/v1630405373/linkedin/general/u4aqln7amyyfdj0tehqy.png)'
  // const bgChosenByUser = `url(${profile.profileBgUrl})`
  // const profileBgImage = profile.profileBgPublicId ? bgChosenByUser : defaultBgUrl

  return (
    <div className={classes.root} >
      <Image
        imageUrl={profile.profileBgPublicId}
        className={classes.profileBackgroundImg}
        type={'profileBgImg'}
        alt={'profile background'}
      />

      <div className={classes.header}>
        <div
          id='toggleModalUploadProfileBg'
          className={clsx(classes.photoIcon, !isEditable && classes.hidden)}
          onClick={() => dispatch(toggleModalAction({ modalType: UPLOAD_PROFILE_BACKGROUND_IMG }))}>
          <PhotoCameraIcon fontSize="inherit" color={'primary'}/>
        </div>
      </div>
      <div>
        <div className={classes.row}>
          <Image
            id='toggleModalUploadAvatar'
            imageUrl={profile.avatarPublicId}
            onClickHandler={isEditable ? () => dispatch(toggleModalAction({ modalType: UPLOAD_AVATAR_IMG })) : null }
            className={clsx(classes.bigAvatar, isEditable && classes.cursorPointer)}
            type={'profileAvatar'}
            alt={'user avatar'}
          />
          <div
            id='toggleModalEditIntro'
            className={clsx(!isEditable && classes.hidden)}
            onClick={() => dispatch(toggleModalAction({ modalType: EDIT_INTRO, profile: props.profile }))}>
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
                {profile.city}{profile.city && profile.country ? ', ' : ''}{profile.country}
              </Typography>
              {profile.city || profile.country ? <SmallDot/> : ''}
              <Link onClick={preventDefault}>
                <Typography variant="body1" color="primary" className={classes.bold}>
                  Contact info
                </Typography>
              </Link>
            </div>
            <div>
              {numberOfConnections
                ? <Link href="#" onClick={preventDefault}>
                  <Typography variant="body1" color="primary" className={classes.bold}>
                    {numberOfConnections} connections
                  </Typography>
                </Link>
                : ''}
            </div>
          </div>
          <div>
            {profile.positionAndCompany
              ? <Hidden xsDown>
                <Typography variant="h5" className={classes.rightPanel}>
                  <BusinessTwoToneIcon fontSize="large" color="secondary" className={classes.businessIcon}/>
                  <span>{profile.positionAndCompany}</span>
                </Typography>
              </Hidden>
              : ''}
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
