import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase'
import Style from '../Messages/styles'
import SharedButton from '../../../shared/Button/SharedButton'

export default function MassageTextFields () {
  const classes = Style()
  const [commentValue, setCommentValue] = useState('')
  const handleCommentInputChange = e => {
    let commentInputVal = e.currentTarget.value
    setCommentValue(commentInputVal)
  }

  return (
    <div>
      <div className={classes.addMsg}>
        <InputBase
          placeholder="Add a message..."
          fullWidth={true}
          multiline={true}
          value={commentValue}
          onChange={handleCommentInputChange}/>
      </div>
      <div className={commentValue.length > 0 ? classes.showedButton : classes.hiddenButton}>
        <SharedButton title="Message"/>
      </div>
    </div>
  )
}