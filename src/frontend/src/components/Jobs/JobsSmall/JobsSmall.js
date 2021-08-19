import styles from './styles'
import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Button from '@material-ui/core/Button'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import SimpleMenu from '../../../shared/PopupMenu/PopupMenu'
import JobsAdditions from './JobsAdditions/JobsAdditions'

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
      <SimpleMenu menuItem={
        <Button color="secondary" className={classes.button}>
          More
          <ArrowDropDownIcon/>
        </Button>
      } userData={<JobsAdditions/>}/>
    </div>
  )
}

export default JobsSmall
