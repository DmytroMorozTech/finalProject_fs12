import Typography from '@material-ui/core/Typography'
import React from 'react'
import styles from './styles'
import InputBase from '@material-ui/core/InputBase'
import toggleModalAction from '../../../../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
import SharedButton from '../../../../../../shared/SharedButton/SharedButton'

function SendPostLink () {
  const classes = styles()

  const dispatch = useDispatch()

  const [sendInputText, setSendInputText] = React.useState('')

  const onSendSubmitHandler = () => {
    // dispatch(createNewPostAction({
    //   text: postInputText
    // }))

    dispatch(toggleModalAction())
  }

  const handleSendInputChange = e => {
    let sendInputVal = e.currentTarget.value
    setSendInputText(sendInputVal)
  }

  const numberCharacterToShowValidate = 8000

  let btnIsDisabled = sendInputText.length === 0 || sendInputText.length > numberCharacterToShowValidate || sendInputText.trim() === ''

  const handleEnterPressed = (e) => {
    if (e.keyCode === 13) {
      if (e.ctrlKey) {
        let sendInputText = e.currentTarget.value + '\n'
        setSendInputText(sendInputText)
      } else if (sendInputText.length > numberCharacterToShowValidate || sendInputText.trim() === '') {
        e.preventDefault()
      } else {
        e.preventDefault()
        onSendSubmitHandler()
      }
    }
  }

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h3" className={classes.subtitle}>
          Send Post Link
        </Typography>
      </div>
      <hr className={classes.line}/>
      <div className={classes.inputBase}>
        <InputBase
          placeholder="Type a name"
          fullWidth={true}
          // value={searchUserInputText}
          // onChange={handleSearchUserInputChange}
          // className={classes.searchUser}
        />
      </div>
      <hr className={classes.line}/>
      <div className={classes.inputBase}>
        <InputBase
          placeholder="Write a message..."
          fullWidth={true}
          multiline={true}
          minRows={7}
          value={sendInputText}
          onChange={handleSendInputChange}
          className={classes.sendInput}
          onKeyDown={handleEnterPressed}
        />
      </div>
      <hr className={classes.line}/>
      <div className={classes.button}>
        <SharedButton title='Send' disabled={btnIsDisabled} onClick={btnIsDisabled ? '' : onSendSubmitHandler}/>
      </div>
    </div>
  )
}

export default SendPostLink
