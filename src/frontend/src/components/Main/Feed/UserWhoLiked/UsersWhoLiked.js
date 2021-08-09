import React from 'react'
import {connect, useDispatch} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import Style from './styles'
import UserWhoLikedItem from './UserWhoLikedItem'
import clsx from 'clsx'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

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
          <CloseIcon/>
        </IconButton>
      )}
    </MuiDialogTitle>
  )
})
const UsersWhoLiked = (props) => {
  const {usersWhoLikedPost, postId} = props
  const usersWhoLikedThisPost = usersWhoLikedPost[postId]
  const classes = Style()
  const dispatch = useDispatch()
  const onPostSubmitHandler = () => {
    dispatch(toggleModalAction())
  }

  return (
    <div>
      <DialogTitle id="customized-dialog-title" onClose={onPostSubmitHandler}>
        <div className={classes.title}>
          <Typography variant="body1" className={clsx(classes.word)}>
            <p>All</p>
          </Typography>
          <Typography variant="body1" className={clsx(classes.icon)}>
            <ThumbUpAltIcon className={classes.likeMini}/>
          </Typography>
          <Typography variant="body1" className={clsx(classes.number)}>
            {usersWhoLikedThisPost.length}
          </Typography>
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
