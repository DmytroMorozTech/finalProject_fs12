import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import Style from './styles'
import Avatar from '../../../../shared/Avatar/Avatar'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const UserWhoLikedPostItem = (props) => {
  const {avatarUrl, positionAndCompany, fullName} = props.user
  const classes = Style()

  return (
    <DialogContent dividers>
      <div className={classes.userInfo}>
        <div className={classes.userAvatar}>
          <div className={classes.avatar}>
            <Avatar avatarUrl={avatarUrl}/>
          </div>
          <div className={classes.iconStatus}>
            <LikeMiniIcon fontSize="inherit"/>
          </div>
        </div>
        <div className={classes.buttonGroup}>
          <Typography variant="body1" className={clsx(classes.name)}>
            {fullName}
          </Typography>
          <Typography variant="body1" className={clsx(classes.position)}>
            {positionAndCompany}
          </Typography>
        </div>
      </div>

    </DialogContent>
  )
}
export default UserWhoLikedPostItem