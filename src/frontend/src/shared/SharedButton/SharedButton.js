import styles from './styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'

function SharedButton ({ title, color = 'primary', variant = 'contained', disabled = false, size = 'small', onClick, type = 'button', fullWidth = false, className = '' }) {
  const classes = styles()

  return (
    <Button color={color} variant={variant} disabled={disabled} size={size} onClick={onClick} type={type} fullWidth={fullWidth} className={clsx(classes.btn, className)}>
      {title}
    </Button>
  )
}

export default SharedButton
