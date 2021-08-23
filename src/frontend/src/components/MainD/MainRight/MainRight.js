import styles from './styles'
import ImgToJobsPage from '../../../shared/ImgToJobsPage/ImgToJobsPage'

function MainRight () {
  const classes = styles()

  return (
    <div className={classes.mainRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default MainRight
