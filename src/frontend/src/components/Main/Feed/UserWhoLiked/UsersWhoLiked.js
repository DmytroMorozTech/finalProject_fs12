import React from 'react'
import {connect, useDispatch} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Style from './styles'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import UserWhoLikedItem from './UserWhoLikedItem'

const styles = (theme) => ({
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

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2)
//   }
// }))(MuiDialogContent)

const UsersWhoLiked = (props) => {
  const {usersWhoLikedPost, postId} = props
  const usersWhoLikedThisPost = usersWhoLikedPost[postId]

  console.log(usersWhoLikedThisPost)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleModalAction())
  }

  const classes = Style()

  return (
    <div>

      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <div className={classes.title}>
          <LikeMiniIcon/>
          {usersWhoLikedThisPost.length}
        </div>
      </DialogTitle>

      {usersWhoLikedThisPost.map(user => <UserWhoLikedItem key={user.id} user={user}/>)}

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    usersWhoLikedPost: state.posts.usersWhoLikedPost,
    postId: state.modal.activePostId
  }
}

export default connect(mapStateToProps, null)(UsersWhoLiked)
