import React from 'react'
import style from './styles'
import Typography from '@material-ui/core/Typography'
import ProfileEducationItem from './ProfileEducationItem'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {ADD_EDUCATION} from '../../Modal/modalTypes'
import AddIcon from '@material-ui/icons/Add'

function ProfileEducation (props) {
  const classes = style()
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">
          Education
        </Typography>
        <div onClick={() =>
          dispatch(toggleModalAction({modalType: ADD_EDUCATION}))}>
          <AddIcon className={classes.createIcon}/>
        </div>
      </div>
      <div>
        <ProfileEducationItem/>
      </div>
    </div>
  )
}
export default ProfileEducation