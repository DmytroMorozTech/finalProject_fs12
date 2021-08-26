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
  comments: {
    usersWhoLikedComment: {}
  }, // key - postId, value - [commentRs, commentRs,...]
  usersWhoLikedPost: {} // key - postId, value - [userRs, userRs,...]
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_POSTS:
      return { ...state, loading: action.payload }

    case actions.SAVE_NEW_POSTS:
      const { posts, headers } = action.payload
      console.log('HEADERS IN REDUCER!')
      console.log(headers)
      const {pagenumber = 0, pagesize = 4, totalpages, hasmore} = headers
      return {
        ...state,
        postsList: [...state.postsList, ...posts],
        pagination: {
          pageNumber: parseInt(pagenumber) + 1,
          pageSize: parseInt(pagesize),
          totalPages: parseInt(totalpages),
          hasMore: hasmore === 'true'
        }
      }

    case actions.SAVE_NEW_BOOKMARKED_POSTS:
      const { posts: postsBm, headers: headersBm } = action.payload
      const {pagenumber: pageNumberBm = 0, pagesize: pageSizeBm = 4,
        totalpages: totalPagesBm, hasmore: hasMoreBm} = headersBm

      return {
        ...state,
        bookmarked: {
          postsList: [...state.bookmarked.postsList, ...postsBm],
          pagination: {
            pageNumber: parseInt(pageNumberBm) + 1,
            pageSize: parseInt(pageSizeBm),
            totalPages: parseInt(totalPagesBm),
            hasMore: hasMoreBm === 'true'
          }
        }
      }

    case actions.ADD_NEW_POST:
      return { ...state, postsList: [ action.payload, ...state.postsList ] }

    case actions.UPDATE_POST:
      const updatedPost = action.payload

      const currentPost = state.postsList.find((post) => post.id === updatedPost.id)
      if (currentPost === null) return state

      const indexOfCurrentPost = state.postsList.indexOf(currentPost)

      return update(state, {
        postsList: { $splice: [[indexOfCurrentPost, 1, updatedPost]] }
      })

    case actions.UPDATE_BOOKMARKED_POST:
      const updatedPost1 = action.payload

      const currentPost1 = state.bookmarked.postsList.find((post) => post.id === updatedPost1.id)
      if (currentPost1 == null) return state

      const indexOfCurrentPost1 = state.bookmarked.postsList.indexOf(currentPost1)

      return update(state, {bookmarked:
          {postsList: {$splice: [[indexOfCurrentPost1, 1, updatedPost1]]}}})

    case actions.DELETE_BOOKMARKED_POST:
      const postId4 = action.payload
      const updatedBookmarkedPosts = state.bookmarked.postsList.filter((post) => post.id !== postId4)
      return { ...state, bookmarked: { ...state.bookmarked, postsList: [...updatedBookmarkedPosts] } }

    case actions.SAVE_BOOKMARKED_POST:
      const newPost = action.payload
      return { ...state,
        bookmarked: { ...state.bookmarked,
          postsList: [...state.bookmarked.postsList, newPost] } }

    case actions.SAVE_USERS_WHO_LIKED_POST:
      const { usersList, id } = action.payload
      return { ...state, usersWhoLikedPost: { ...state.usersWhoLikedPost, [id]: usersList } }

    case actions.SAVE_USERS_WHO_LIKED_COMMENT:
      const { usersList1, id1 } = action.payload
      return { ...state, usersWhoLikedComment: { ...state.usersWhoLikedComment, [id1]: usersList1 } }

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