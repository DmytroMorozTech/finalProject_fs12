import StyleButton from './StyleButton'
import Button from '@material-ui/core/Button'

function SharedButton ({title, color = 'primary', variant = 'contained'}) {
  const classes = StyleButton()
  return (
    <div>
      <Button color={color} variant={variant} className={classes.btn}>
        {title}
      </Button>
    </div>
  )
}

export default SharedButton
