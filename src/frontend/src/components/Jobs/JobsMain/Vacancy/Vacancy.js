import styles from './styles'
import SmallDot from '../../../../shared/SmallDot/SmallDot'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import TrackChangesIcon from '@material-ui/icons/TrackChanges'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import clsx from 'clsx'
import Image from '../../../../shared/Image/Image'

function Vacancy (props) {
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
            <div className={classes.vacancyInfo}>
              <div className={classes.link}>
                {titleOfVacancy}
              </div>
              <Typography variant="h6">
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
          <div className={classes.icons}>
            <div>
              <div className={clsx(classes.icon, classes.hover)}>
                <VisibilityOffIcon fontSize="inherit"/>
              </div>
            </div>
            <div>
              <div className={classes.icon}>
                <BookmarkBorderIcon fontSize="inherit"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className={classes.line}/>
      </div>
    </div>
  )
}

export default Vacancy
