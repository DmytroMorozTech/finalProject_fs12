import React, { useState, useRef } from 'react'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import Style from './styles'

const ImageUpload = () => {
  const classes = Style()
  const [image, setImage] = useState('')
  const inputFile = useRef(null)

  const handleFileUpload = e => {
    const { files } = e.target
    if (files && files.length) {
      const filename = files[0].name

      let parts = filename.split('.')
      const fileType = parts[parts.length - 1]
      // console.log('fileType', fileType) // ex: zip, rar, jpg, svg etc.

      setImage(files[0])
    }
  }

  const onButtonClick = () => {
    inputFile.current.click()
  }

  // console.log('imageimage', image)
  return (
    <div>
      <input
        style={{ display: 'none' }}
        accept=".jpg, .jpeg, .png"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
      <div className={classes.menu} onClick={onButtonClick}>
        <ImageOutlinedIcon/>
      </div>
    </div>
  )
}

export default ImageUpload