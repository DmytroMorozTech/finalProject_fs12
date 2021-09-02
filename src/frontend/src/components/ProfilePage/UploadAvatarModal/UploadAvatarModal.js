import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import { useDispatch } from 'react-redux'
import { uploadAvatarImgAction } from '../../../redux/Image/imageActions'
import { toast } from 'react-toastify'
import { Image, Transformation } from 'cloudinary-react'
import Preloader from '../../../shared/Preloader/Preloader'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const UploadAvatarModal = () => {
  const classes = styles()
  const [photoIsChosen, setPhotoIsChosen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const dispatch = useDispatch()
  const [imgIsUploading, setImgIsUploading] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setImgIsUploading(true)
    setPhotoIsChosen(false)
    dispatch(uploadAvatarImgAction(selectedFile))
  }

  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        Update profile photo
      </Typography>
      <DialogContent dividers>

        <Image
          className={classes.pageImg}
          publicId = {'linkedin/avatars/fkryxjf9lggr54oj6pzz'}
          crop = "crop"
        >
          <Transformation
            height="160"
            width="160"
            quality="100"
            format="auto"
          />
        </Image>

        <Typography variant="subtitle1">
            Update your profile photo
        </Typography>
        <Typography variant="subtitle2">
            Profile photo of high-quality will enable you to stand out from the crowd.
        </Typography>
        {imgIsUploading && <Preloader/>}
      </DialogContent>
      <DialogActions>
        <form onSubmit={onSubmitHandler} id ="imageForm">
          <SharedButton
            component = 'label'
            title= "CHOOSE PHOTO"
            children={<input
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

            />}
          />
          <SharedButton type={'submit'} title={'UPLOAD'} disabled={!photoIsChosen}/>
        </form>
      </DialogActions>
    </div>
  )
}
export default UploadAvatarModal
