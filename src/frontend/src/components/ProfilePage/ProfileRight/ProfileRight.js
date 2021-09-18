import styles from './styles'
import ImgToJobsPage from '../../../shared/ImgToJobsPage/ImgToJobsPage'

function ProfileRight () {
  const classes = styles()

  return (
    <div className={classes.profileRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default ProfileRight
