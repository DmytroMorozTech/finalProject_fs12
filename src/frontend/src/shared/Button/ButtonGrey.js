import Button from '@material-ui/core/Button'
import StyleButton from './StyleButton'

function ButtonGrey ({title}) {
  const classes = StyleButton()
  return (
    <div>
      <Button variant="outlined" color="secondary" className={classes.btn}>
        {title}
      </Button>
    </div>
  )
}

export default ButtonGrey
