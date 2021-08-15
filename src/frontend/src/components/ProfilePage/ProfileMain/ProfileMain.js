import React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import CreateIcon from '@material-ui/icons/Create'
import avatarUrl from '../../../temporaryImages/avatar.jpg'
import style from './styles'
import { Link, TextField } from '@material-ui/core'
import SharedButton from '../../../shared/Button/SharedButton'
import { ADD_NEW_CERTIFICATION } from '../../Modal/modalTypes'
import toggleModalAction from '../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
// import DatePicker from '@material-ui/lab/DatePicker'
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
// import Stack from '@material-ui/core/Stack'

function ProfileMain (props) {
  const {fullName = 'Alan Prost', positionAndCompany = 'Junior Java developer',
    lastEducation = 'DANIT', country = 'Ukraine', numberOfConnections = 45} = props
  const classes = style()
  const bull = <span className={classes.bullet}>•</span>
  const preventDefault = (event) => event.preventDefault()
  const dispatch = useDispatch()
  // const [value, setValue] = React.useState(new Date())

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.photoIcon} onClick={preventDefault}>
          <PhotoCameraIcon color={'primary'}/>
        </div>
      </div>
      <div className={classes.content}>
        <Avatar src={avatarUrl} alt={avatarUrl} className={classes.bigAvatar}/>
        <div className={classes.editName}>
          <div className={classes.btnCreate}>
            <CreateIcon className={classes.createIcon}/>
          </div>
        </div>
        <div className={classes.name}>
          <div className={classes.leftPanel}>
            <Typography variant="h3">
              {fullName}
            </Typography>
            <Typography variant="body1">
              {positionAndCompany}
            </Typography>
            <div className={classes.info}>
              <Typography variant="body2">
                {country}{bull}
              </Typography>
              <Link className={classes.contactInfo} onClick={preventDefault}>
                Contact info
              </Link>
            </div>
          </div>
          <div className={classes.rightPanel}>
            <Typography variant="body1">
              {lastEducation}
            </Typography>
          </div>
        </div>
        <div>
          <Link href="#" onClick={preventDefault}>
            <span className={classes.number}>{numberOfConnections}</span>
            <span>connections</span>
          </Link>
        </div>
        <div className={classes.dropDownBtn}>
          <SharedButton title="Open to"/>
          <div onClick={() =>
            dispatch(toggleModalAction({modalType: ADD_NEW_CERTIFICATION}))}>
            <SharedButton title="Add Certification" color="default"/>
          </div>

          <SharedButton title="More" color="default"/>
          <TextField
            required
            fullWidth
            color="secondary"
            size="small"
            type="string"
            id="filled-required"
            label="Name"
            placeholder="Ex: Microsoft certified network associate security"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <TextField
            size="small"
            color="secondary"
            fullWidth
            type="string"
            id="filled-read-only-input"
            label="Issuing organization"
            placeholder="Ex: Microsoft"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <form className={classes.container} noValidate>

          </form>
        </div>
        <div className={classes.box}>
          <Link href="#" onClick={preventDefault}>
            <div className={classes.linkText}>
              <span className={classes.firstLine}>Open to work</span>
              <span className={classes.secondLine}>{positionAndCompany}</span>
              <span>See all details</span>
            </div>
          </Link>
          <div className={classes.btnCreate}>
            <CreateIcon className={classes.createIcon} fontSize={'small'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileMain