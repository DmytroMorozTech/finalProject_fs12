import React from 'react'
import style from './styles'
import Typography from '@material-ui/core/Typography'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ProfileEducationItem from './ProfileEducationItem'
import {connect, useDispatch} from 'react-redux'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {ADD_EDUCATION} from '../../Modal/modalTypes'

const ProfileEducation = (props) => {
  const { educations } = props
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
          <AddCircleOutlineIcon/>
        </div>
      </div>
      <div>
        {educations.map(user => <ProfileEducationItem key={user.id} user={user}/>)}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    educations: state.user.educations
  }
}
export default connect(mapStateToProps, null)(ProfileEducation)