import FullscreenTrue from './FullscreenTrue/FullscreenTrue'
import FullscreenFalse from './FullscreenFalse/FullscreenFalse'
import React from 'react'

function Preloader ({ fullscreen = false }) {
  if (fullscreen) {
    return (<FullscreenTrue/>)
  }
  return (<FullscreenFalse/>)
}

export default Preloader
