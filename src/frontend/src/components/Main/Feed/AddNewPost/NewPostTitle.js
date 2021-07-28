import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  title: {
    width: '100vh',
    marginLeft: '20px',
    color: 'gray'
  }
}))
const NewPostTitle = () => {
  const classes = useStyles()
  return (
    <div className={classes.title}>
      <h4>Create post</h4>
    </div>
  )
}
export default NewPostTitle