import styles from './styles'
import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import SimpleMenu from '../../../shared/PopupMenu/PopupMenu'
import JobsAdditions from './JobsAdditions/JobsAdditions'
import SharedLinkSquare from '../../../shared/SharedLinkSquare/SharedLinkSquare'
import { Link } from 'react-router-dom'

function JobsSmall () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <Link to='/jobs/my_jobs' className={classes.item} onClick={() => console.log('My Jobs')}>
        <div className={classes.icon}>
          <BookmarkIcon fontSize="inherit"/>
        </div>
        <div className={classes.title}>
          My Jobs
        </div>
      </Link>
      <SimpleMenu menuItem={
        <SharedLinkSquare title='More' icon={<ArrowDropDownIcon/>}/>
      } userData={<JobsAdditions/>}/>
    </div>
  )
}

export default JobsSmall
