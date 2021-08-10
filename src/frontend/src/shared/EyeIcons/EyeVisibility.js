import VisibilityIcon from '@material-ui/icons/Visibility'
import styles from './styles'
import { useState } from 'react'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

function EyeVisibility () {
  const classes = styles()

  const [toggle, setToggle] = useState()

  const handlerVisibility = (e) => {
    let toggle = e.currentTarget
    setToggle(toggle)
  }

  return (
    <div className={classes.eye} onClick={handlerVisibility}>
      <VisibilityOffIcon className={toggle ? classes.hidden : classes.eyes}/>
      <VisibilityIcon className={toggle ? classes.eyes : classes.hidden}/>
    </div>
  )
}

export default EyeVisibility
