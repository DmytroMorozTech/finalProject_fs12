import Style from './styles'
import Button from '@material-ui/core/Button'

function SharedButton ({title, color = 'primary', variant = 'contained'}) {
  const classes = Style()
  return (
    <div>
      <Button color={color} variant={variant} className={classes.btn}>
        {title}
      </Button>
    </div>
  )
}

export default SharedButton
