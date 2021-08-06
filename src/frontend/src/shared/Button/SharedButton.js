import Style from './styles'
import Button from '@material-ui/core/Button'

function SharedButton ({ title, color = 'primary', variant = 'contained', size = 'small' }) {
  const classes = Style()
  return (
    <Button color={color} variant={variant} size={size} className={classes.btn}>
      {title}
    </Button>
  )
}

export default SharedButton
