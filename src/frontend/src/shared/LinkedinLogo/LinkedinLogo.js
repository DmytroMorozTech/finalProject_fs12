import LinkedInIcon from '@material-ui/icons/LinkedIn'
import styles from './styles'
import React from 'react'

function LinkedinLogo () {
  const classes = styles()
  return (
    <div className={classes.logo}>
      <span>Linked</span>
      <LinkedInIcon fontSize='inherit'/>
    </div>
  )
}

export default LinkedinLogo
