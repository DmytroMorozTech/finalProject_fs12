import React from 'react'
import {useDispatch} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogContent from '@material-ui/core/DialogContent'
import Style from './styles'
import Avatar from '../../../../shared/Avatar/Avatar'

// const styles = (theme) => ({
//   root: {
//     width: '500px',
//     margin: 0,
//     padding: theme.spacing(2)
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500]
//   }
// })

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose && (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       )}
//     </MuiDialogTitle>
//   )
// })

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const UserWhoLikedPostItem = (props) => {
  const {avatarUrl, positionAndCompany, fullName} = props.user
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleModalAction())
  }

  const classes = Style()

  return (
    <DialogContent dividers>
      <div className={classes.userInfo}>
        <div className={classes.avatar}>
          <Avatar avatarUrl={avatarUrl}/>
        </div>
        <div className={classes.buttonGroup}>
          <span>{fullName}</span>
          <span>{positionAndCompany}</span>
        </div>
      </div>

    </DialogContent>
  )
}
export default UserWhoLikedPostItem