import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import toggleModalAction from '../../redux/Modal/modalActions'
import {useDispatch, useSelector} from 'react-redux'
import {modalContentSelector, openModalSelector} from '../../redux/Modal/modalSelector'
import Style from './styles'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import * as ReactDOM from 'react-dom'

export default function CustomizedDialogs () {
  const classes = Style()
  const isModalOpened = useSelector(openModalSelector)
  const dispatch = useDispatch()
  const modalContent = useSelector(modalContentSelector)

  const handleClose = () => {
    dispatch(toggleModalAction())
  }

  const style = (theme) => ({

    root: {
      width: '500px',
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

  const DialogTitle = withStyles(style)((props) => {
    const {children, classes, onClose, ...other} = props
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
  })

  const JSX_MODAL = (
    isModalOpened &&
    <div className={classes.root}>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isModalOpened}>

        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>

        {modalContent}
      </Dialog>
    </div>
  )

  return ReactDOM.createPortal(JSX_MODAL, document.querySelector('#modal'))
}