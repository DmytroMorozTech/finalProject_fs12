import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import PublicIcon from '@material-ui/icons/Public'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import InputBase from '@material-ui/core/InputBase'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import Tooltip from '@material-ui/core/Tooltip'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import styles from './styles'
import { activeUserSelector } from '../../../../redux/User/userSelector'
import { createNewPostAction } from '../../../../redux/Post/postActions'
import SharedButton from '../../../../shared/Button/SharedButton'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'space-between'
  }
}))(MuiDialogActions)

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[800],
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize
  }
}))(Tooltip)

const AddNewPost = () => {
  const dispatch = useDispatch()
  const activeUser = useSelector(activeUserSelector)

  const onPostSubmitHandler = () => {
    dispatch(createNewPostAction({ text: postInputText }))
    dispatch(toggleModalAction())
  }

  const classes = styles()

  const [postInputText, setPostInputText] = React.useState('')

  const handlePostInputChange = e => {
    let postInputVal = e.currentTarget.value
    setPostInputText(postInputVal)
  }

  let btnIsDisabled = postInputText.length === 0
  const longText1 = `Add a photo`
  const longText2 = `Add a video`
  const longText3 = `Add a documents`
  return (
    <div>
      <div className={classes.title}>
        Create a post
      </div>
      <DialogContent dividers>
        <div className={classes.userInfo}>
          <div className={classes.avatar}>
            <img src={activeUser.avatarUrl} alt={'user avatar'} className={classes.userAvatar}/>
          </div>
          <div className={classes.buttonGroup}>
            <Typography variant="h5">
              {activeUser.fullName}
            </Typography>
            <button className={classes.shareComment}>
              <div className={classes.icons}>
                <PublicIcon fontSize="inherit"/>
              </div>
              <Typography variant="h4">
                Anyone
              </Typography>
              <div className={classes.icons}>
                <ArrowDropDownIcon fontSize="inherit"/>
              </div>
            </button>
          </div>
        </div>
        <InputBase
          placeholder="What do you want to talk about?"
          fullWidth={true}
          multiline={true}
          minRows={7}
          value={postInputText}
          onChange={handlePostInputChange}
          className={classes.editor}
        />
      </DialogContent>
      <DialogActions>
        <div className={classes.shareButtons}>
          <LightTooltip title={longText1} placement={'top'} className={classes.tool}>
            <div className={classes.shareButton}>
              <PhotoSizeSelectActualIcon/>
            </div>
          </LightTooltip>
          <LightTooltip title={longText2} placement={'top'} className={classes.tool}>
            <div className={classes.shareButton}>
              <YouTubeIcon/>
            </div>
          </LightTooltip>
          <LightTooltip title={longText3} placement={'top'} className={classes.tool}>
            <div className={classes.shareButton}>
              <EventNoteIcon/>
            </div>
          </LightTooltip>
          <hr className={classes.line}/>
        </div>
        <SharedButton title="Post" disabled={btnIsDisabled} onClick={onPostSubmitHandler}/>
      </DialogActions>
    </div>
  )
}
export default AddNewPost
