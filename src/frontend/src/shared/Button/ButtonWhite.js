import StyleButton from './StyleButton'
import Button from '@material-ui/core/Button'

function ButtonWhite ({title}) {
  const classes = StyleButton()
  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.btn}>
        {title}
      </Button>
    </div>
  )
}

export default ButtonWhite
