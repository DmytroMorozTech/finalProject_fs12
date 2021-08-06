import * as actions from './postActionTypes'
import update from 'immutability-helper'

const initialState = {
  postsList: [],
  loading: false,
  comments: {}
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_POSTS:
      return {...state, loading: action.payload}

    case actions.SAVE_POSTS:
      return { ...state, postsList: action.payload }

    case actions.ADD_NEW_POST:
      return { ...state, postsList: [...state.postsList, action.payload] }

    // ----------------------------------------------
    case actions.UPDATE_POST: // ok
      let updatedPost = action.payload

      const currentPost = state.postsList.find((post) => post.id === updatedPost.id)

      const indexOfCurrentPost = state.postsList.indexOf(currentPost)

      return update(state, {
        postsList: { $splice: [[indexOfCurrentPost, 1, updatedPost]] }
      })

    case actions.GET_USERS_WHO_LIKED_POST:
      let {usersList, id} = action.payload

      let currentPost1 = state.postsList.find((post) => post.id === id)
      let currentPost1Copy = {...currentPost1}
      currentPost1Copy.usersWhoLikedPost = usersList

      const indexOfCurrentPost1 = state.postsList.indexOf(currentPost1)

      return update(state, {
        postsList: { $splice: [[indexOfCurrentPost1, 1, currentPost1Copy]] }
      })

    case actions.ADD_NEW_COMMENT_FOR_POST:
      let { comment, postId: postId2 } = {...action.payload}
      return { ...state, comments: {...state.comments, [postId2]: [ ...(state.comments[postId2] || []), comment ]} }

    case actions.SAVE_COMMENTS_FOR_POST:
      const { listOfComments, postId } = action.payload
      return { ...state, comments: {...state.comments, [postId]: listOfComments} }

    case actions.DELETE_COMMENT:
      const { commentId, postId: postId3 } = action.payload
      const updatedComments = state.comments[postId3].filter(c => c.id !== commentId)

      return { ...state, comments: {...state.comments, [postId3]: updatedComments} }

    default: {
      return state
    }
  }
}

export default postReducer