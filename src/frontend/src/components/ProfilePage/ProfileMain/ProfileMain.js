import React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import CreateIcon from '@material-ui/icons/Create'
import avatarUrl from '../../../temporaryImages/avatar.jpg'
import style from './styles'
import { Hidden, Link } from '@material-ui/core'
import SharedButton from '../../../shared/Button/SharedButton'
import SmallDot from '../../../shared/SmallDot/SmallDot'
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {EDIT_INTRO} from '../../Modal/modalTypes'
import {useDispatch, useSelector} from 'react-redux'
import {activeUserSelector} from '../../../redux/User/userSelector'

function ProfileMain (props) {
  const {
    fullName = 'Alan Frost', position = 'Junior Java developer',
    company = 'DAN.IT', city = 'Kyiv', country = 'Ukraine', numberOfConnections = 45
  } = props
  const classes = style()
  const dispatch = useDispatch()
  const preventDefault = (event) => event.preventDefault()
  const activeUser = useSelector(activeUserSelector)

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.photoIcon} onClick={preventDefault}>
          <PhotoCameraIcon fontSize="inherit" color={'primary'}/>
        </div>
      </div>
      <div>
        <div className={classes.row}>
          <Avatar src={activeUser.avatarUrl} alt={activeUser.fullName} className={classes.bigAvatar}/>
          <div onClick={() =>
            dispatch(toggleModalAction({modalType: EDIT_INTRO}))}>
            <CreateIcon className={classes.editName}/>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.leftPanel}>
            <Typography variant="h3">
              {activeUser.fullName}
            </Typography>
            <Typography variant="body1">
              {activeUser.positionAndCompany}
            </Typography>
            <div className={classes.info}>
              <Typography variant="body1" color="secondary">
                {city}, {country}
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
                <span>{activeUser.positionAndCompany}</span>
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
            <Typography variant="body1" color="secondary">{position}</Typography>
            <Typography variant="body1" color="primary" className={classes.bold}>See all details</Typography>
          </Link>
          <div>
            <CreateIcon fontSize="inherit" className={classes.createIcon}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain
