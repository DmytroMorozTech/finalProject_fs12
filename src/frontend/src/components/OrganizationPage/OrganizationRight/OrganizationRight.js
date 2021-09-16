import styles from './styles'
import ImgToJobsPage from '../../../shared/ImgToJobsPage/ImgToJobsPage'

function OrganizationRight () {
  const classes = styles()

  return (
    <div className={classes.organisationRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default OrganizationRight
