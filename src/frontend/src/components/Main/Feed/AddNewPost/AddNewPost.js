import React from 'react'
import {useDispatch} from 'react-redux'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {toggleModalAction} from '../../../../redux/Modal/modalActions'
import PublicIcon from '@material-ui/icons/Public'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import InputBase from '@material-ui/core/InputBase'
import TemporaryAvatar from '../../../../temporaryImages/14.jpg'
import NewPostTitle from './NewPostTitle'
import NewPostFooter from './NewPostFooter'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  avatar: {
    display: 'flex',
    flexDirection: 'column'
  },
  userAvatar: {
    width: '65px',
    borderRadius: '50%'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonGroup: {
    paddingLeft: '10px'
  },
  shareComment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 10,
    borderRadius: '15px',
    cursor: 'pointer'
  },
  worldIcon: {
    '& > .MuiSvgIcon-root': {
      fontSize: 15,
      color: 'grey'
    }
  },
  arrow: {
    '& > .MuiSvgIcon-root': {
      fontSize: 15,
      color: 'grey'
    }
  },
  editor: {
    height: 150
  }
}))

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

const AddNewPost = ({
  userName = 'Steve Johns',
  userAvatar = TemporaryAvatar,
  buttonName = 'SAVE'
                  
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [postInputText, setPostInputText] = React.useState('')

  const handlePostInputChange = e => {
    let postInputVal = e.currentTarget.value
    setPostInputText(postInputVal)
  }

  return (
    <div>
      <NewPostTitle/>
      <DialogTitle id="customized-dialog-title" onClose={() => console.log('HELLO!')} >
        {/* onClose={handleClose} */}

      </DialogTitle>

      <DialogContent dividers>
        <div className={classes.userInfo}>
          <div className={classes.avatar}>
            <img src={userAvatar} alt={'user avatar'} className={classes.userAvatar}/>
          </div>
          <div className={classes.buttonGroup}>
            <span>{userName}</span>
            <button className={classes.shareComment}>
              <div className={classes.worldIcon}>
                <PublicIcon/>
              </div>
              <span>Anyone</span>
              <div className={classes.arrow}>
                <ArrowDropDownIcon/>
              </div>
            </button>
          </div>
        </div>
        <InputBase
          placeholder="What do you want to talk about?"
          fullWidth={true}
          multiline={true}
          value={postInputText}
          onChange={handlePostInputChange}
          className={classes.editor}
        />
      </DialogContent>
      
      <DialogActions>
        <NewPostFooter/>

        <Button autoFocus color="primary">
                      SAVE
          {/* <Button autoFocus onClick={handleClose} color="primary"> */}
          {/*  SAVE */}
        </Button>
      </DialogActions>

    </div>
  )
}
export default AddNewPost
