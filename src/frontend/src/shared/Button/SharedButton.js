import styles from './styles'
import Button from '@material-ui/core/Button'

function SharedButton ({ title, color = 'primary', variant = 'contained', disabled = false, size = 'small', onClick, type = 'submit' }) {
  const classes = styles()

  return (
    <Button color={color} variant={variant} disabled={disabled} size={size} onClick={onClick} className={classes.btn} type={type}>
      {title}
    </Button>
  )
}

export default SharedButton
