import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import PublicIcon from '@material-ui/icons/Public'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import Tooltip from '@material-ui/core/Tooltip'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventNoteIcon from '@material-ui/icons/EventNote'
import styles from './styles'
import { activeUserSelector } from '../../../../redux/User/userSelector'
import { createNewPostAction } from '../../../../redux/Post/postActions'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import { toast } from 'react-toastify'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    maxHeight: '450px',
    overflowY: 'auto'
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(0),
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

  const [photoIsChosen, setPhotoIsChosen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [imgIsUploading, setImgIsUploading] = useState(false)

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

  const numberCharacterToShowValidate = 3000
  const validateCount = (numberCharacterToShowValidate - postInputText.length)
  let btnIsDisabled = postInputText.length === 0 || postInputText.length > numberCharacterToShowValidate

  return (
    <div>
      <div className={classes.title}>
        Create a post
      </div>
      <hr className={classes.horizontalLine}/>
      <DialogContent>
        <div className={classes.userInfo}>
          <div>
            <img src={activeUser.avatarUrl} alt={'user avatar'} className={classes.userAvatar}/>
          </div>
          <div className={classes.buttonGroup}>
            <Typography variant="h5">
              {activeUser.fullName}
            </Typography>
            <button className={classes.sharePost}>
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
        {photoIsChosen ? <img src={URL.createObjectURL(selectedFile)}/> : null}
      </DialogContent>
      <div
        className={postInputText.length > numberCharacterToShowValidate ? classes.showedValidateMessage : classes.hidden}>
        <div className={classes.validateMessage}>
          <RemoveCircleIcon fontSize="inherit"/>
          <div className={classes.validateInfo}>You have exceeded the maximum character limit.</div>
        </div>
        <div className={classes.validateInfo}>
          {validateCount}
        </div>
      </div>
      <DialogActions>
        <div className={classes.shareButtons}>

          <LightTooltip title={`Add a photo`} placement={'top'}>
            <div className={classes.shareButton} >
              <label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  style={{display: 'none'}}
                  required
                  onChange={(event) => {
                    const file = event.target.files[0]
                    if (file.size > 10485760) {
                      toast.error('The size of image should not exceed 10MB')
                      return
                    }

                    setSelectedFile(file)
                    setPhotoIsChosen(true)
                  }}

                />
                <PhotoSizeSelectActualIcon/>
              </label>
            </div>
          </LightTooltip>

          <LightTooltip title={`Add a video`} placement={'top'}>
            <div className={classes.shareButton}>
              <YouTubeIcon/>
            </div>
          </LightTooltip>
          <LightTooltip title={`Add a document`} placement={'top'}>
            <div className={classes.shareButton}>
              <EventNoteIcon/>
            </div>
          </LightTooltip>
          <hr className={classes.verticalLine}/>
        </div>
        <SharedButton title="Post" disabled={btnIsDisabled} onClick={onPostSubmitHandler}/>
      </DialogActions>
    </div>
  )
}
export default AddNewPost
