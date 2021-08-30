import React, { useState } from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import imgPage from '../../../temporaryImages/internet.jpg'
import { useDispatch } from 'react-redux'
import { uploadImageToCloudinary } from '../../../redux/Image/imageActions'
import { toast } from 'react-toastify'

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

const AddBackgroundModal = () => {
  const classes = styles()
  const [photoIsChosen, setPhotoIsChosen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // const fileExtension = '.' + selectedFile.type.replace(/(.*)\//g, '')
    // console.log(`File extension: ${fileExtension}`)

    console.log(`File size: ${selectedFile.size}`)
    console.log(selectedFile)
    dispatch(uploadImageToCloudinary(selectedFile))
  }

  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
                Add background photo
      </Typography>
      <DialogContent dividers>
        <div>
          <img alt="internet" src={imgPage} className={classes.pageImg}/>
        </div>
        <Typography variant="subtitle1">
            Showcase your personality, interests, team moments or notable milestones
        </Typography>
        <Typography variant="subtitle2">
            A good background photo will help you stand out.
        </Typography>
      </DialogContent>
      <DialogActions>
        <form onSubmit={onSubmitHandler} id ="imageForm">
          <SharedButton
            component = 'label'
            title= "BTN"
            children={<input
              type="file"
              id="file"
              accept="image/*"
              style={{display: 'none'}}
              required
              onChange={(event) => {
                const file = event.target.files[0]
                if (file.size > 4194304) {
                  toast.error('The size of profile background image should not exceed 4MB')
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
      {/* {urlOfUploadedImg ? <img src={urlOfUploadedImg}/> : null } */}
    </div>
  )
}
export default AddBackgroundModal
