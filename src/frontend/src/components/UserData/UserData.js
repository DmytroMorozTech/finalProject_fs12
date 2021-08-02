import React from 'react'
import Style from './styles'
import Button from '@material-ui/core/Button'
import {NavLink} from 'react-router-dom'
import {MenuItem} from '@material-ui/core'

function UserData () {
  const classes = Style()
  return (
    <div className={classes.root}>
      {/* temporary hardcoded data */}
      <MenuItem component={NavLink} to='/personal' className={classes.menuItem}>
        <div className={classes.avatarWrapper}>
          <img className={classes.avatar} src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" alt=""/>
          <div className={classes.userDataWrapper}>
            <p className={classes.userName}>Elon Mask</p>
            <p className={classes.userProfession}>Founder and CEO at SpaceX</p>
          </div>
        </div>
      </MenuItem>
      <Button component={NavLink} to='/personal' className={classes.profileButton} variant="outlined" color="primary">
        Open Profile
      </Button>
      <MenuItem className={classes.logoutLink}>Logout</MenuItem>
    </div>
  )
}

export default UserData