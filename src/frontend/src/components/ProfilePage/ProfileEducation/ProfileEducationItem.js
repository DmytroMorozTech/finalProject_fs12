import React from 'react'
import style from './styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'

function ProfileEducationItem (props) {
  const {school = 'DANIT', degreeReceived = 'Bachelar', dateStart = 2019, dateFinish = 2021} = props
  const classes = style()
  const dash = <span className={classes.dash}>-</span>

  return (
    <div className={classes.content}>
      <div className={classes.school}>
        <Typography variant="body1" className={classes.schoolName}>{school}</Typography>
        <Typography>{degreeReceived}</Typography>
        <Typography>{dateStart}{dash}{dateFinish}</Typography>
      </div>
      <div className={classes.btnCreate}>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}
export default ProfileEducationItem