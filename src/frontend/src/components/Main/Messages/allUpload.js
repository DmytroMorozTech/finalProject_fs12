import React, { useState, useRef } from 'react'
import Style from './styles'
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined'

const AllUpload = () => {
  const classes = Style()
  const [allFile, setAllFile] = useState('')
  const inputFile = useRef(null)

  const handleFileUpload = e => {
    const { files } = e.target
    if (files && files.length) {
      const filename = files[0].name

      let parts = filename.split('.')
      const fileType = parts[parts.length - 1]
      // console.log('fileType', fileType) // ex: zip, rar, jpg, svg etc.

      setAllFile(files[0])
    }
  }

  const onButtonClick = () => {
    inputFile.current.click()
  }

  console.log('allall', allFile)
  return (
    <div>
      <input
        style={{ display: 'none' }}
        // accept=".zip, .rar"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
      <div className={classes.menu} onClick={onButtonClick}>
        <AttachmentOutlinedIcon/>
      </div>
    </div>
  )
}

export default AllUpload