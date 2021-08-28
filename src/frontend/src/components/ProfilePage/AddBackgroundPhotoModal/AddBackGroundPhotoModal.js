import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import imgPage from '../../../temporaryImages/internet.jpg'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const AddBackgroundModal = () => {
  const classes = styles()
   
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
                Add background photo
      </Typography>
      <DialogContent dividers>
        <div>
          <img alt="internet" src={imgPage} className={classes.pageImg}/>
        </div>
        <Typography variant="subtitle1">
            Showcase your personality, interests, team moments or notable milestones
        </Typography>
        <Typography variant="subtitle2">
            A good background photo will help you stand out.
        </Typography>
      </DialogContent>
      <DialogActions>
        <SharedButton title="Edit profile background" />
      </DialogActions>
    </div>
  )
}
export default AddBackgroundModal
