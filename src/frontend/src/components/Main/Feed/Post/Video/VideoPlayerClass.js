import React, { Component } from 'react'
import { Cloudinary } from 'cloudinary-core'
import 'cloudinary-video-player/dist/cld-video-player.light.min'
import 'cloudinary-video-player/dist/cld-video-player.light.min.css'

import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
  iframeWrapper: {
    width: '100%',
    display: 'block',
    margin: '0 auto'
  },

  videoContainer: {
    position: 'relative',
    maxWidth: '100%',
    overflow: 'hidden'
    // paddingTop: '56.25%' /* 16:9 Aspect Ratio */
  },

  responsiveIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    border: 'none'
  }
})

class VideoPlayerClass extends Component {
  cld = () => {
    return new Cloudinary({ cloud_name: this.props.options.cloudName, secure: true })
  };
  videoPlayerInit = () => {
    const cld = this.cld()
    const id = this.props.options.uniqueIdentifier.toString()
    console.log(`uniqueIdentifier: ${id}`)
    cld.videoPlayer('some-video', {
      publicId: this.props.options.publicId,
      fluid: true,
      controls: true,
      preload: 'auto',
      mute: true,
      autoplay: false,
      sourceTypes: ['mp4']
    })
  };
  componentDidMount () {
    this.videoPlayerInit()
  }
  render () {
    const {classes} = this.props
    return (
      <div className={classes.videoContainer}>
        <video id="some-video" />
      </div>
    )
  }
}
export default withStyles(useStyles)(VideoPlayerClass)
