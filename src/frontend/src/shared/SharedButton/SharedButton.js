import styles from './styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'

function SharedButton ({ title, color = 'primary', variant = 'contained',
  disabled = false, size = 'small', onClick, type = 'button',
  component = 'button', to = '#', fullWidth = false,
  className = '', children, startIcon, endIcon}) {
  const classes = styles()

  return (
    <Button color={color} variant={variant} disabled={disabled}
      size={size} onClick={onClick} type={type}
      component={component} to={to} fullWidth={fullWidth}
      className={clsx(classes.btn, className)} startIcon={startIcon} endIcon={endIcon}
    >
      {title}
      {children}
    </Button>
  )
}

export default SharedButton
