import styles from './styles'
import { Image, Transformation } from 'cloudinary-react'
import React from 'react'

function Avatar (props) {
  const { avatarUrl } = props

  const classes = styles()
  return (
    <Image
      publicId = {avatarUrl}
      crop = "crop"
      className={classes.userAvatar}
    >
      <Transformation
        height="160"
        width="160"
        crop="fill"
        gravity="face"
        radius="max"
        quality="100"
      />
    </Image>
    // <img src={avatarUrl} alt={avatarUrl} className={classes.userAvatar}/>
  )
}

export default Avatar
