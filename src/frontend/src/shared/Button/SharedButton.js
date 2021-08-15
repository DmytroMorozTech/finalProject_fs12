import styles from './styles'
import Button from '@material-ui/core/Button'

function SharedButton ({ title, color = 'primary', variant = 'contained', disabled = false, size = 'small', onClick }) {
  const classes = styles()

  return (
    <Button color={color} variant={variant} disabled={disabled} size={size} onClick={onClick} type="submit" className={classes.btn}>
      {title}
    </Button>
  )
}

export default SharedButton
