import styles from './styles'
import ImgToJobsPage from '../../../../shared/ImgToJobsPage/ImgToJobsPage'

function ConnectionsRight () {
  const classes = styles()

  return (
    <div className={classes.connectionsRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default ConnectionsRight
