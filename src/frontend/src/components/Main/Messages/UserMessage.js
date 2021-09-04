import React from 'react'
import Style from './styles'
import Image from '../../../shared/Image/Image'

function UserMessage ({text, time, messageSender}) {
  const classes = Style()

  const getDateTitle = () => {
    const localTime = new Date()
    switch (true) {
      case localTime.getFullYear() === +time.split('T')[0].split('-')[0] && +time.split('T')[0].split('-')[2] !== localTime.getDate():
        return time.split('T')[1].split('.')[2] + '.' + time.split('T')[1].split('.')[1]
      case localTime.getDate() !== +time.split('T')[0].split('-')[2] && localTime.getFullYear() !== +time.split('T')[0].split('-')[0]:
        return time.split('T')[0].split('-')[2] + ' ' + getMonthText(time.split('T')[0].split('-')[1]) + ' ' + time.split('T')[0].split('-')[0]
      default:
        const splitDate = time.split('T')[1].split('.')[0].split(':').slice(0, 2)
        return splitDate[0] + ':' + splitDate[1]
    }
  }

  const getDate = () => {
    const splitDate = time.split('T')[1].split('.')[0].split(':').slice(0, 2)
    return splitDate[0] + ':' + splitDate[1]
  }

  const getMonthText = (date) => {
    switch (date) {
      case '01':
        return 'JANUARY'
      case '02':
        return 'FEBRUARY'
      case '03':
        return 'MARCH'
      case '04':
        return 'APRIL'
      case '05':
        return 'MAY'
      case '06':
        return 'JUNE'
      case '07':
        return 'JULY'
      case '08':
        return 'AUGUST'
      case '09':
        return 'SEPTEMBER'
      case '10':
        return 'OCTOBER'
      case '11':
        return 'NOVEMBER'
      case '12':
        return 'DECEMBER'
      default:
        return 'incorrect data'
    }
  }

  return (
    <>
      <time className={classes.messageListTimeHeading}>{getDateTitle()}</time>
      <div className={classes.eventListItem}>
        <Image
          imageUrl={messageSender && (messageSender.avatarUrl || 'linkedin/general/ghrchekikx3dnas6ivxm')}
          alt={'user avatar'}
          className={classes.userAvatar}
          type={'extraSmallAvatar'}
        />
        <div className={classes.messageWrapper}>
          <div className={classes.messageGroupMeta}>
            <span className={classes.messageGroupMetaText}>{messageSender && messageSender.fullName}</span>
            <span className={classes.messageSentTime}> &bull; {getDate()}</span>
          </div>
          <div className={classes.eventListItemMessageBubble}>
            <p className={classes.eventListItemBody}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserMessage