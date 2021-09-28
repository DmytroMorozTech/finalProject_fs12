import styles from './styles'
import InputBase from '@material-ui/core/InputBase'
import SharedButton from '../../../../../../shared/SharedButton/SharedButton'
import Comment from './Comment/Comment'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeUserSelector } from '../../../../../../redux/User/userSelector'
import { createNewCommentAction } from '../../../../../../redux/Comment/commentActions'
import { allCommentsSelector } from '../../../../../../redux/Comment/commentSelector'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import Image from '../../../../../../shared/Image/Image'

function NewCommentInput (props) {
  const {postId} = props
  const classes = styles()

  const dispatch = useDispatch()

  const activeUser = useSelector(activeUserSelector)
  // we get all comments from Redux store using useSelector

  const allComments = useSelector(allCommentsSelector)
  const commentsForPost = allComments[postId] || []

  const [commentValue, setCommentValue] = useState('')

  const handleCommentInputChange = e => {
    let commentInputVal = e.currentTarget.value
    setCommentValue(commentInputVal)
  }

  const createNewCommentHandler = () => {
    dispatch(createNewCommentAction({ text: commentValue, id: postId }))
    setCommentValue('')
  }

  const numberCharacterToShowValidate = 1250
  const validateCount = (numberCharacterToShowValidate - commentValue.length)

  const handleEnterPressed = (e) => {
    if (e.keyCode === 13) {
      if (e.ctrlKey) {
        let commentInputVal = e.currentTarget.value + '\n'
        setCommentValue(commentInputVal)
      } else if (commentValue.length > numberCharacterToShowValidate || commentValue.trim() === '') {
        e.preventDefault()
      } else {
        e.preventDefault()
        createNewCommentHandler()
      }
    }
  }

  return (
    <div className={classes.newCommentInput}>
      <div className={classes.addComment}>
        <Image
          imageUrl={activeUser.avatarPublicId}
          alt={'user avatar'}
          type={'extraSmallAvatar'}
          className={classes.smallAvatar}
        />
        <div className={classes.newComment}>
          <InputBase
            placeholder="Add a comment..."
            multiline={true}
            value={commentValue}
            onChange={handleCommentInputChange}
            className={classes.commentField}
            id="input"
            autoFocus={true}
            onKeyDown={handleEnterPressed}
          />
          <div className={commentValue.length > numberCharacterToShowValidate ? classes.showedValidateMessage : classes.hidden}>
            <RemoveCircleIcon fontSize='inherit'/>
            <div className={classes.validateMessage}>You have exceeded the maximum character limit.</div>
          </div>
          <div className={commentValue.length > 0 ? classes.showedButton : classes.hidden}>
            <SharedButton title="Post" disabled={commentValue.length > numberCharacterToShowValidate || commentValue.trim() === ''}
              size='small' onClick={createNewCommentHandler}/>
            <div className={commentValue.length >= 1200 && commentValue.length <= numberCharacterToShowValidate ? classes.validateMessage : classes.hidden}>
              {commentValue.length}
            </div>
            <div className={commentValue.length > numberCharacterToShowValidate ? classes.validateMessage : classes.hidden}>
              <span>{validateCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.comments}>
          {commentsForPost.map(comment => <Comment key={comment.id} comment={comment} postId={postId}/>)}
          <div className={classes.loadMoreComments}>
            <span>Load more comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCommentInput
