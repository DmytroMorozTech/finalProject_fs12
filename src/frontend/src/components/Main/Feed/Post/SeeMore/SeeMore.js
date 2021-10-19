import React, { useState } from 'react'
import styles from './styles'
import clsx from 'clsx'

function SeeMore ({ numberOfLimitChar = 150, children }) {
  const text = children

  const classes = styles()

  const [seaMore, setSeaMore] = useState(true)

  const handleSeeMore = () => {
    setSeaMore(!seaMore)
  }

  return (
    <span> {seaMore ? text.slice(0, numberOfLimitChar) : text}
      <span
        id='seeMore'
        onClick={handleSeeMore} className={clsx(text.length > numberOfLimitChar ? classes.seeMore : classes.none)}>
        {seaMore ? '...see more' : ''}
      </span>
    </span>
  )
}

export default SeeMore
