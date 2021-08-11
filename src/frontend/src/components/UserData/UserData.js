import React from 'react'
import styles from './styles'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'

function UserData () {
  const classes = styles()

  return (
    <div className={classes.root}>
      {/* temporary hardcoded data */}
      <MenuItem component={NavLink} to="/personal" className={classes.menuItem}>
        <div className={classes.avatarWrapper}>
          <img className={classes.avatar} src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" alt=""/>
          <div className={classes.userDataWrapper}>
            <span className={classes.userName}>Elon Mask</span>
            <div className={classes.userProfession}>Founder and CEO at SpaceX</div>
          </div>
        </div>
      </MenuItem>
      <Button component={NavLink} to="/personal" className={classes.profileButton} variant="outlined" color="primary">
        View Profile
      </Button>
      <Button className={classes.profileButton} variant="outlined" color="secondary">
        Sign Out
      </Button>
    </div>
  )
}

export default UserData
