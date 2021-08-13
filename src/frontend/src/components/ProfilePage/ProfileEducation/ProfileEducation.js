import React from 'react'
import style from './styles'
import Typography from '@material-ui/core/Typography'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ProfileEducationItem from './ProfileEducationItem'

function ProfileEducation (props) {
  const classes = style()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">
          Education
        </Typography>
        <AddCircleOutlineIcon/>
      </div>
      <div>
        <ProfileEducationItem/>
      </div>
    </div>
  )
}
export default ProfileEducation