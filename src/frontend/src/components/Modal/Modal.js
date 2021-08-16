import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import toggleModalAction from '../../redux/Modal/modalActions'
import {useDispatch, useSelector} from 'react-redux'
import {modalContentSelector, openModalSelector} from '../../redux/Modal/modalSelector'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import styles from './styles'

export default function CustomizedDialogs () {
  const classes = styles()
  const isModalOpened = useSelector(openModalSelector)
  const dispatch = useDispatch()
  const modalContent = useSelector(modalContentSelector)

  const handleClose = () => {
    dispatch(toggleModalAction())
  }

  const DialogTitle = (props) => {
    const {children, onClose, ...other} = props
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose && (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon/>
          </IconButton>
        )}
      </MuiDialogTitle>
    )
  }
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isModalOpened}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        {modalContent}
      </Dialog>
    </div>
  )
}
