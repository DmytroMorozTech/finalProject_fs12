import React from 'react'
import styles from './styles'

function VideoPlayerCloudHosted (props) {
  const classes = styles()
  const url = `https://player.cloudinary.com/embed/?public_id=${props.options.publicId}&cloud_name=${props.options.cloudName}&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bautoplay%5D=true&source%5Bsource_types%5D%5B0%5D=mp4`
  return (
    <div className={classes.iframeWrapper}>
      <div className={classes.iframeContainer}>
        <iframe className={classes.responsiveIframe}
          title="Cloud Hosted Video Player"
          src={url}
          width="100%"
          // height="480"
          allow="fullscreen; encrypted-media; picture-in-picture"
          // allow = "autoplay" should be added later on
          // at the moment it is turned off in order to save bandwidth on Cloudinary
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  )
}

export default VideoPlayerCloudHosted