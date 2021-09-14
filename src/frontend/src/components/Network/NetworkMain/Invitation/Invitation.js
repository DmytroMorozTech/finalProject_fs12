import styles from './styles'
import Image from '../../../../shared/Image/Image'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import SharedLinkSquare from '../../../../shared/SharedLinkSquare/SharedLinkSquare'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { deleteInvitationAction } from '../../../../redux/Network/networkActions'

function Invitation (props) {
  const {isReceived, isManage, numberOfConnection = 1,
    isNewInvitation = false, createDate = '3 hours ago'} = props
  const {avatarPublicId, fullName, positionAndCompany
  } = props.data[isReceived ? 'userWho' : 'userWhom']
  const {id} = props.data

  const classes = styles()

  const dispatch = useDispatch()

  const onDeleteHandler = () => {
    dispatch(deleteInvitationAction(id))
  }

  return (
    <div className={clsx(classes.invitation, isNewInvitation && classes.newInvitation)}>
      <div className={classes.flex}>
        <div>
          <Image
            imageUrl={avatarPublicId}
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
            {!isManage
              ? <div className={clsx(classes.connection, classes.smallScreenConnection)}>
                <RadioButtonUncheckedIcon fontSize="inherit"/>
                <RadioButtonUncheckedIcon fontSize="inherit" className={classes.icon}/>
                <Typography variant="h6" className={classes.connectionText}>
                  {numberOfConnection} mutual connection
                </Typography>
              </div>
              : ''
            }
            <Typography variant="h6" className={classes.smallScreenConnection}>
              {createDate}
            </Typography>
          </div>
        </div>
      </div>
      <div className={clsx(classes.buttons, classes.smallScreenButtons)}>
        <div className={classes.buttonSquare}>
          {isReceived
            ? <SharedLinkSquare onClick={onDeleteHandler} title='Ignore' to='#'/>
            : <SharedLinkSquare onClick={onDeleteHandler} title='Withdraw' to='#'/>
          }
        </div>
        {isReceived
          ? <div>
            <SharedButton title='Accept' variant='outlined'/>
          </div>
          : ''
        }
      </div>
    </div>
  )
}

export default Invitation
