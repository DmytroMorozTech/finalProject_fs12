import React, { Component } from 'react'
import { Cloudinary } from 'cloudinary-core'
import 'cloudinary-video-player/dist/cld-video-player.light.min'
import 'cloudinary-video-player/dist/cld-video-player.light.min.css'

import { withStyles } from '@material-ui/core/styles'

export const useStyles = () => ({
  iframeWrapper: {
    width: '100%',
    display: 'block',
    margin: '0 auto'
  },

  videoContainer: {
    position: 'relative',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '480px'
  }

})

export class VideoPlayerClass extends Component {
  cld = () => {
    return new Cloudinary({ cloud_name: this.props.options.cloudName, secure: true })
  };
  videoPlayerInit = () => {
    const cld = this.cld()
    cld.videoPlayer(this.props.options.uniqueIdentifier, {
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
        <video id={this.props.options.uniqueIdentifier} />
      </div>
    )
  }
}

export default withStyles(useStyles)(VideoPlayerClass)
