import styles from './styles'
import Image from '../../../../shared/Image/Image'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import SharedLinkSquare from '../../../../shared/SharedLinkSquare/SharedLinkSquare'

function Invitation (props) {
  const {avatarUrl, fullName = 'Panny Hofstader', positionAndCompany = 'Senior JavaScript Developer', numberOfConnection = 1} = props

  const classes = styles()

  return (
    <div className={classes.invitation}>
      <div className={classes.flex}>
        <div>
          <Image
            imageUrl={avatarUrl}
            alt={'user avatar'}
            className={classes.userAvatar}
            type={'largeAvatar'}
          />
        </div>
        <div>
          <div className={classes.userInfo}>
            <Typography variant="h5">
              {fullName}
            </Typography>
            <Typography variant="h6">
              {positionAndCompany}
            </Typography>
            <div className={classes.connection}>
              <RadioButtonUncheckedIcon fontSize="inherit"/>
              <RadioButtonUncheckedIcon fontSize="inherit" className={classes.icon}/>
              <Typography variant="h6" className={classes.connectionText}>
                {numberOfConnection} mutual connection
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttons}>
        <div className={classes.buttonIgnore}>
          {/* Link is hardcoded below */}
          <SharedLinkSquare title='Ignore' to='#'/>
        </div>
        <div>
          <SharedButton title='Accept' variant='outlined'/>
        </div>
      </div>
    </div>
  )
}

export default Invitation
