import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../redux/Modal/modalActions'
import {useDispatch, useSelector} from 'react-redux'
import {modalTypeSelector, openModalSelector} from '../../redux/Modal/modalSelector'
import {ADD_NEW_POST} from './modalTypes'
import AddNewPost from '../Main/Feed/AddNewPost/AddNewPost'
import NewPostTitle from '../Main/Feed/AddNewPost/NewPostTitle'
import NewPostFooter from '../Main/Feed/AddNewPost/NewPostFooter'
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
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

export default function CustomizedDialogs () {
  const classes = Style()
  const isModalOpened = useSelector(openModalSelector)
  const dispatch = useDispatch()
  const modalType = useSelector(modalTypeSelector)

  const renderTitle = modalType === ADD_NEW_POST ? <NewPostTitle/> : null
  const renderModal = modalType === ADD_NEW_POST ? <AddNewPost/> : null
  const renderFooter = modalType === ADD_NEW_POST ? <NewPostFooter/> : null

  const handleClose = () => {
    dispatch(toggleModalAction())
  }

  return (
    <div className={classes.root}>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isModalOpened}>
        {renderTitle}
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>

        </DialogTitle>
        <DialogContent dividers>
          {renderModal}
        </DialogContent>
        <DialogActions>
          {renderFooter}
          <Button autoFocus onClick={handleClose} color="primary">
                        SAVE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
