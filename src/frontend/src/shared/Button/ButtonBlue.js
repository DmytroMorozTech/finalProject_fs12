import StyleButton from './StyleButton'
import Button from '@material-ui/core/Button'

function ButtonBlue ({title}) {
  const classes = StyleButton()
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.btn}>
        {title}
      </Button>
    </div>
  )
}

export default ButtonBlue
