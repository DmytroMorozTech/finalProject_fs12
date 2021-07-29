import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import toggleModalAction from '../../redux/Modal/modalActions'
import {useDispatch, useSelector} from 'react-redux'
import {modalContentSelector, openModalSelector} from '../../redux/Modal/modalSelector'
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
