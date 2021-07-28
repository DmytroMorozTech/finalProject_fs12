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
import {modalContentSelector, modalTypeSelector, openModalSelector} from '../../redux/Modal/modalSelector'
import {ADD_NEW_POST} from './modalTypes'
import AddNewPost from '../Main/Feed/AddNewPost/AddNewPost'
import NewPostTitle from '../Main/Feed/AddNewPost/NewPostTitle'
import NewPostFooter from '../Main/Feed/AddNewPost/NewPostFooter'
import Style from './styles'

export default function CustomizedDialogs () {
  const classes = Style()
  const isModalOpened = useSelector(openModalSelector)
  const dispatch = useDispatch()
  const modalContent = useSelector(modalContentSelector)

  const handleClose = () => {
    dispatch(toggleModalAction())
  }

  return (
    <div className={classes.root}>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isModalOpened}>
        {modalContent}

      </Dialog>
    </div>
  )
}
