import * as actions from './postActionTypes'
import update from 'immutability-helper'

const initialState = {
  postsList: [],
  loading: false,
  pagination: {
    pageNumber: 0,
    pageSize: 4,
    totalPages: 0,
    hasMore: true
  },
  bookmarked: {
    postsList: [],
    pagination: {
      pageNumber: 0,
      pageSize: 4,
      totalPages: 0,
      hasMore: true
    }
  },
  comments: {}, // key - postId, value - [commentRs, commentRs,...]
  usersWhoLikedPost: {} // key - postId, value - [userRs, userRs,...]
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_POSTS:
      return { ...state, loading: action.payload }

    case actions.SAVE_NEW_POSTS:
      const { content, size: pageSize, number: pageNumber, last, totalPages } = action.payload
      return {
        ...state,
        postsList: [...state.postsList, ...content],
        pagination: {
          pageNumber: pageNumber + 1,
          pageSize: pageSize,
          totalPages: totalPages,
          hasMore: !last
        }
      }

    case actions.SAVE_NEW_BOOKMARKED_POSTS:
      const { content: content1, size: pageSize1, number: pageNumber1, last: last1, totalPages: totalPages1 } =
        action.payload
      return {
        ...state,
        bookmarked: {
          postsList: [...state.bookmarked.postsList, ...content1],
          pagination: {
            pageNumber: pageNumber1 + 1,
            pageSize: pageSize1,
            totalPages: totalPages1,
            hasMore: !last1
          }
        }
      }

    case actions.ADD_NEW_POST:
      return { ...state, postsList: [ action.payload, ...state.postsList ] }

    case actions.UPDATE_POST:
      const updatedPost = action.payload

      const currentPost = state.postsList.find((post) => post.id === updatedPost.id)

      const indexOfCurrentPost = state.postsList.indexOf(currentPost)

      return update(state, {
        postsList: { $splice: [[indexOfCurrentPost, 1, updatedPost]] }
      })

    case actions.SAVE_USERS_WHO_LIKED_POST:
      const { usersList, id } = action.payload
      return { ...state, usersWhoLikedPost: { ...state.usersWhoLikedPost, [id]: usersList } }

    case actions.ADD_NEW_COMMENT_FOR_POST:
      let { comment, postId: postId2 } = { ...action.payload }
      return { ...state, comments: { ...state.comments, [postId2]: [...(state.comments[postId2] || []), comment] } }

    case actions.SAVE_COMMENTS_FOR_POST:
      const { listOfComments, postId } = action.payload
      return { ...state, comments: { ...state.comments, [postId]: listOfComments } }

    case actions.DELETE_COMMENT:
      const { commentId, postId: postId3 } = action.payload
      const updatedComments = state.comments[postId3].filter(c => c.id !== commentId)

      return { ...state, comments: { ...state.comments, [postId3]: updatedComments } }

    default: {
      return state
    }
  }
}

export default postReducer