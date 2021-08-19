import styles from './styles'
import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Button from '@material-ui/core/Button'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

function JobsSmall () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <div className={classes.item} onClick={() => console.log('My Jobs')}>
        <div className={classes.icon}>
          <BookmarkIcon fontSize="inherit"/>
        </div>
        <div className={classes.title}>
          My Jobs
        </div>
      </div>
      <Button variant="default" color="secondary" endIcon={<ArrowDropDownIcon/>} className={classes.button}>
        More
      </Button>
    </div>
  )
}

export default JobsSmall
