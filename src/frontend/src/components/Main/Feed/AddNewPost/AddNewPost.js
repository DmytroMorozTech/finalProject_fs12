import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import PublicIcon from '@material-ui/icons/Public'
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
import Image from '../../../../shared/Image/Image'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import Preloader from '../../../../shared/Preloader/Preloader'

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

  const [imageIsChosen, setImageIsChosen] = useState(false)
  const [videoIsChosen, setVideoIsChosen] = useState(false)
  const [selectedImageFile, setSelectedImageFile] = useState(null)
  const [selectedVideoFile, setSelectedVideoFile] = useState(null)
  const [videoFileName, setVideoFileName] = useState('')
  const [postIsBeingUploaded, setPostIsBeingUploaded] = useState(false)

  const onPostSubmitHandler = () => {
    setPostIsBeingUploaded(true)
    dispatch(createNewPostAction({
      text: postInputText,
      image: selectedImageFile,
      video: selectedVideoFile
    }))
  }

  const handleCancelImgSelection = () => {
    setImageIsChosen(false)
    setSelectedImageFile(null)
  }

  const handleCancelVideoSelection = () => {
    setVideoIsChosen(false)
    setSelectedVideoFile(null)
    setVideoFileName('')
  }

  const photoPreviewComponent = () => (
    <div className={clsx(classes.previewImgWrapper, !imageIsChosen ? classes.removed : '')}>
      <div className={classes.cross} onClick={handleCancelImgSelection}>
        <CloseIcon fontSize="inherit"/>
      </div>
      <img className={classes.previewImg} alt="preview" src={URL.createObjectURL(selectedImageFile)}/>
    </div>
  )

  const videoWasChosenNotification = () => (
    <div className={classes.videoWasChosenNotification}>
      <Typography variant="h5" style={{ maxWidth: 'calc(100% - 50px)' }}>
        {`You have attached a video file with name:  ${videoFileName}`}
      </Typography>
      <span className={classes.crossForVideoNotification} onClick={handleCancelVideoSelection}>
        <CloseIcon fontSize="inherit"/>
      </span>
    </div>
  )

  const classes = styles()

  const [postInputText, setPostInputText] = React.useState('')

  const handlePostInputChange = e => {
    let postInputVal = e.currentTarget.value
    setPostInputText(postInputVal)
  }

  const numberCharacterToShowValidate = 3000
  const validateCount = (numberCharacterToShowValidate - postInputText.length)
  let btnIsDisabled = postInputText.length === 0 || postInputText.length > numberCharacterToShowValidate || postInputText.trim() === ''

  const handleEnterPressed = (e) => {
    if (e.keyCode === 13) {
      if (e.ctrlKey) {
        let postInputText = e.currentTarget.value + '\n'
        setPostInputText(postInputText)
      } else if (postInputText.length > numberCharacterToShowValidate || postInputText.trim() === '') {
        e.preventDefault()
      } else {
        e.preventDefault()
        onPostSubmitHandler()
      }
    }
  }

  return (
    <div>
      <div className={classes.title}>
        Create a post
      </div>
      <hr className={classes.horizontalLine}/>

      {!postIsBeingUploaded &&
      <>
        <DialogContent>
          <div className={classes.userInfo}>
            <div>
              <Image
                imageUrl={activeUser.avatarPublicId}
                alt={'user avatar'}
                className={classes.userAvatar}
                type={'smallAvatar'}
              />
            </div>
            <div className={classes.buttonGroup}>
              <Typography variant="h5">
                {activeUser.fullName}
              </Typography>
              <button className={classes.sharePost}>
                <div className={classes.worldIcon}>
                  <PublicIcon fontSize="inherit"/>
                </div>
                <Typography variant="h4">
                  Anyone
                </Typography>
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
            onKeyDown={handleEnterPressed}
          />

          {imageIsChosen ? photoPreviewComponent() : null}

          {videoIsChosen && videoWasChosenNotification()}
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
              <div className={classes.shareButton}>
                <label>
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    disabled={videoIsChosen}
                    onChange={(event) => {
                      const file = event.target.files[0]
                      if (file && file.size > 10485760) {
                        toast.error('The size of image should not exceed 10MB')
                        return
                      }

                      if (file) {
                        handleCancelVideoSelection()
                        handleCancelImgSelection()
                        setSelectedImageFile(file)
                        setImageIsChosen(true)
                      }
                    }}

                  />
                  <PhotoSizeSelectActualIcon className={classes.icons}/>
                </label>
              </div>
            </LightTooltip>

            <LightTooltip title={`Add a video`} placement={'top'}>
              <div className={classes.shareButton}>
                <label>
                  <input
                    type="file"
                    id="file"
                    accept="video/*"
                    style={{ display: 'none' }}
                    disabled={imageIsChosen}
                    onChange={(event) => {
                      const file = event.target.files[0]
                      // console.log('Video file was chosen')
                      // console.log(file)
                      if (file && file.size > 52428800) {
                        toast.error('The size of video should not exceed 50MB')
                        return
                      }

                      if (file) {
                        handleCancelVideoSelection()
                        handleCancelImgSelection()
                        setSelectedVideoFile(file)
                        setVideoIsChosen(true)
                        setVideoFileName(file.name)
                      }
                    }}
                  />
                  <YouTubeIcon className={classes.icons}/>
                </label>
              </div>
            </LightTooltip>

            <LightTooltip title={`Add a document`} placement={'top'}>
              <div className={classes.shareButton}>
                <EventNoteIcon className={classes.icons}/>
              </div>
            </LightTooltip>

            <hr className={classes.verticalLine}/>
          </div>

          <SharedButton title="Post" disabled={btnIsDisabled} onClick={btnIsDisabled ? null : onPostSubmitHandler}/>

        </DialogActions>

      </>
      }

      {postIsBeingUploaded &&
      <div className={classes.preloader}>
        <Typography variant="h2">
          Your post is being uploaded...
        </Typography>
        <div><Preloader/></div>

      </div>}
    </div>
  )
}

export default AddNewPost
