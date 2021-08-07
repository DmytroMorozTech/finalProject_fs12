import Style from './styles'
import Button from '@material-ui/core/Button'

function SharedButton ({title, color = 'primary', variant = 'contained', disabled = false}) {
  const classes = Style()
  return (
    <div>
      <Button disabled = {disabled} color={color} variant={variant} className={classes.btn}>
        {title}
      </Button>
    </div>
  )
}

export default SharedButton
