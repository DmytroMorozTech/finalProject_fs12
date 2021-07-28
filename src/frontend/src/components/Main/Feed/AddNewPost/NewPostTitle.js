import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    
}))
const NewPostTitle = () => {
  const classes = useStyles()
  return (
    <div className={classes.title}>
      <h5>Create post</h5>
    </div>
  )
}
export default NewPostTitle