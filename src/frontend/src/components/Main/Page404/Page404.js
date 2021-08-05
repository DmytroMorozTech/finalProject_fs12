/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Style from './style'
// import Button from '../../../shared/Button/SharedButton'
import img from '../../../temporaryImages/page404img.svg'
import {Link} from 'react-router-dom'

function Page404 () {
  const classes = Style()
  return (
    <div className={classes.container}>
      <img src={img} className={classes.page404Bg}/>
      <h3 className={classes.bigText}>This page doesn't exist</h3>
      <p className={classes.smallText}>Check the URL-address or return to home page on LinkedIn</p>
      <Link className={classes.page404Btn} to='/home'>Return to feed</Link>
    </div>
  )
}

export default Page404