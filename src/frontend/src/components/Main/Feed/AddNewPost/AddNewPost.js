import React from 'react'
import {useDispatch} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import PublicIcon from '@material-ui/icons/Public'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import InputBase from '@material-ui/core/InputBase'
import TemporaryAvatar from '../../../../temporaryImages/14.jpg'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import Style from './styles'

const styles = (theme) => ({

  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose && (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'space-between'
  }
}))(MuiDialogActions)

const AddNewPost = ({
  userName = 'Steve Johns',
  userAvatar = TemporaryAvatar
                  
}) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleModalAction())
  }

  const classes = Style()
  const [postInputText, setPostInputText] = React.useState('')
  const handlePostInputChange = e => {
    let postInputVal = e.currentTarget.value
    setPostInputText(postInputVal)
  }

  // let buttonClasses = postInputText.length > 0 ? {color: 'primary'} : {disabled: 'true'}
  const longText1 = `Add photo`
  const longText2 = `Add video`
  const longText3 = `Add documents`
  return (
    <div>
      <div className={classes.title}>
        <h4>Create post</h4>
      </div>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} >

      </DialogTitle>

      <DialogContent dividers>
        <div className={classes.userInfo}>
          <div className={classes.avatar}>
            <img src={userAvatar} alt={'user avatar'} className={classes.userAvatar}/>
          </div>
          <div className={classes.buttonGroup}>
            <span>{userName}</span>
            <button className={classes.shareComment}>
              <div className={classes.worldIcon}>
                <PublicIcon/>
              </div>
              <span>Anyone</span>
              <div className={classes.arrow}>
                <ArrowDropDownIcon/>
              </div>
            </button>
          </div>
        </div>
        <InputBase
          placeholder="What do you want to talk about?"
          fullWidth={true}
          multiline={true}
          value={postInputText}
          onChange={handlePostInputChange}
          className={classes.editor}
        />
      </DialogContent>
      
      <DialogActions>
        <div className={classes.shareButtons}>
          <Tooltip title={longText1} placement={'top'}>
            <div className={classes.photo}>
              <PhotoSizeSelectActualIcon/>
            </div>
          </Tooltip>
          <Tooltip title={longText2} placement={'top'}>
            <div className={classes.video}>
              <YouTubeIcon/>
            </div>
          </Tooltip>
          <Tooltip title={longText3} placement={'top'}>
            <div className={classes.docs}>
              <EventNoteIcon/>
            </div>
          </Tooltip>
          <div className={classes.vl}></div>
        </div>
        <Button autoFocus onClick={handleClose} color={'primary'}>
                      POST
        </Button>
      </DialogActions>
    </div>
  )
}
export default AddNewPost
