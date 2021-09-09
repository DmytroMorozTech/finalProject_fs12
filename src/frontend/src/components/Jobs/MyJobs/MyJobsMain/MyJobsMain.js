import styles from './styles'
import React from 'react'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import SavedVacancy from './SavedVacancy/SavedVacancy'

function MyJobsMain () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        My Jobs
      </div>
      <div className={classes.btn}>
        <SharedButton title="Saved"/>
      </div>
      <hr className={classes.line}/>
      <div>
        <SavedVacancy/>
      </div>
    </div>
  )
}

export default MyJobsMain
