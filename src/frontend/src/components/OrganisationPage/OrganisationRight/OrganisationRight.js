import styles from './styles'
import ImgToJobsPage from '../../../shared/ImgToJobsPage/ImgToJobsPage'

function OrganisationRight () {
  const classes = styles()

  return (
    <div className={classes.organisationRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default OrganisationRight
