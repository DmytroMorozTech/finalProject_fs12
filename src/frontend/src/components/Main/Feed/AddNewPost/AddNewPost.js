import React from 'react'
import {useDispatch} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {toggleModalAction} from '../../../../redux/Modal/modalActions'
import PublicIcon from '@material-ui/icons/Public'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import InputBase from '@material-ui/core/InputBase'
import TemporaryAvatar from '../../../../temporaryImages/14.jpg'

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
    flexDirection: 'row',
    justifyContent: 'center'
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
  }
}))
const AddNewPost = ({userName = 'Steve Johns', userAvatar = TemporaryAvatar}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [editorText, setEditorText] = React.useState('')

  return (
    <div>
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
        value={editorText}
        onChange={(event) => setEditorText(event.target.value)}
        className={classes.editor}/>
    </div>
  )
}
export default AddNewPost