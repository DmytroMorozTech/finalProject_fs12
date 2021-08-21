import styles from './styles'
import { Link } from 'react-router-dom'
import jobs from '../../temporaryImages/jobs.jpg'

function ImgToJobsPage () {
  const classes = styles()

  return (
    <Link exact to="/jobs">
      <img alt="jobs" src={jobs} className={classes.img}/>
    </Link>
  )
}

export default ImgToJobsPage
