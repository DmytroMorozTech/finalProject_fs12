import styles from './styles'
import Avatar from '../../../../../../shared/Avatar/Avatar'
import InputBase from '@material-ui/core/InputBase'
import SharedButton from '../../../../../../shared/Button/SharedButton'
import Comment from './Comment/Comment'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeUserSelector } from '../../../../../../redux/User/userSelector'
import { createNewCommentAction } from '../../../../../../redux/Post/postActions'
import { allCommentsSelector } from '../../../../../../redux/Post/postSelector'

function NewCommentInput ({id}) {

  const classes = styles()

  const dispatch = useDispatch()

  const activeUser = useSelector(activeUserSelector)
  // we get all comments from Redux store using useSelector

  const allComments = useSelector(allCommentsSelector)
  const commentsForPost = allComments[id] || []

  const [commentValue, setCommentValue] = useState('')

  const handleCommentInputChange = e => {
    let commentInputVal = e.currentTarget.value
    setCommentValue(commentInputVal)
  }

  const handleEnterPressed = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleButtonPost()
    }
  }

  const handleButtonPost = () => {
    dispatch(createNewCommentAction({ text: commentValue, id: id }))
    setCommentValue('')
  }

  return (
    <div>
      <div className={classes.addComment}>
        <div className={classes.smallAvatar}>
          <Avatar avatarUrl={activeUser.avatarUrl}/>
        </div>
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
          <div className={commentValue.length > 0 ? classes.showedButton : classes.hidden} onClick={handleButtonPost}>
            <SharedButton title="Post"/>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.comments}>
          {commentsForPost.map(comment => <Comment key={comment.id} comment={comment}/>)}
          <div className={classes.loadMoreComments}>
            <span>Load more comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCommentInput
