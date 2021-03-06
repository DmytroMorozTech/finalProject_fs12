import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import toggleModalAction from '../../redux/Modal/modalActions'
import { useDispatch, useSelector } from 'react-redux'
import { modalContentSelector, openModalSelector } from '../../redux/Modal/modalSelector'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import styles from './styles'
import { postIsBeingUploadedSelector } from '../../redux/Post/postSelector'

export default function CustomizedDialogs () {
  const classes = styles()
  const isModalOpened = useSelector(openModalSelector)
  const dispatch = useDispatch()
  const modalContent = useSelector(modalContentSelector)
  const postIsBeingUploaded = useSelector(postIsBeingUploadedSelector)

  const handleClose = postIsBeingUploaded ? null : () => dispatch(toggleModalAction())

  const DialogTitle = (props) => {
    const { children, onClose, ...other } = props
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose && (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={postIsBeingUploaded ? null : onClose}>
            <CloseIcon/>
          </IconButton>
        )}
      </MuiDialogTitle>
    )
  }
  return (
    <Dialog classes={{paper: classes.paperRoot}} onClose={handleClose} aria-labelledby="customized-dialog-title" open={isModalOpened}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      </DialogTitle>
      {modalContent}
    </Dialog>
  )
}
