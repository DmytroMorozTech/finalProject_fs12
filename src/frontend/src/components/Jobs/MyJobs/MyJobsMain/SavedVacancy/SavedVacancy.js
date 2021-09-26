import styles from './styles'
import SmallDot from '../../../../../shared/SmallDot/SmallDot'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import TrackChangesIcon from '@material-ui/icons/TrackChanges'
import SimpleMenu from '../../../../../shared/PopupMenu/PopupMenu'
import ThreeDots from '../../../../../shared/ThreeDots/TreeDots'
import SavedVacancyAdditions from './SavedVacancyAdditions/SavedVacancyAdditions'
import Image from '../../../../../shared/Image/Image'

function SavedVacancy (props) {
  const {
    titleOfVacancy = 'Junior Java Developer',
    organizationName = 'GlobalLogic',
    organizationLocation = 'Kyiv, Ukraine',
    createdDate = '3 weeks ago',
    applicants = 2
  } = props

  const classes = styles()

  return (
    <div>
      <div>
        <div className={classes.vacancy}>
          <div className={classes.row}>
            <div>
              <Image
                imageUrl={'linkedin/general/mr5jb7fifohjgy8d7unj'}
                className={classes.vacancyImg}
                alt={'job'}
              />
            </div>
            <div>
              <div className={classes.link}>
                {titleOfVacancy}
              </div>
              <Typography variant="h6" className={classes.org}>
                {organizationName}
              </Typography>
              <Typography variant="h6">
                {organizationLocation}
              </Typography>
              <div className={classes.recruiting}>
                <TrackChangesIcon fontSize="inherit" className={classes.iconTarget}/>
                <Typography variant="h6">
                  Actively recruiting
                </Typography>
              </div>
              <div className={classes.date}>
                <Typography variant="h6">
                  {createdDate}
                </Typography>
                <SmallDot/>
                <Typography variant="h6" className={classes.applicants}>
                  {applicants} applicants
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.popupMenu}>
            <SimpleMenu menuItem={
              <ThreeDots/>
            } userData={<SavedVacancyAdditions/>}/>
          </div>
        </div>
      </div>
      <div>
        <hr className={classes.line}/>
      </div>
    </div>
  )
}

export default SavedVacancy
