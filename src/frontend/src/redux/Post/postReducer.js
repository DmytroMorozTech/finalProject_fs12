import * as actions from './postActionTypes'
import update from 'immutability-helper'

const initialStore = {
  postsList: [],
  loading: false,
  comments: {}
}

const postReducer = (store = initialStore, action) => {
  switch (action.type) {
    case actions.LOADING_POSTS:
      return {...store, loading: action.payload}

    case actions.SAVE_POSTS:
      return { ...store, postsList: action.payload }

    case actions.ADD_NEW_POST:
      return { ...store, postsList: [...store.postsList, action.payload] }

    case actions.UPDATE_POST:
      let updatedPost = action.payload

      const currentPost = store.postsList.find((post) => post.id === updatedPost.id)

      const indexOfCurrentPost = store.postsList.indexOf(currentPost)

      return update(store, {
        postsList: { $splice: [[indexOfCurrentPost, 1, updatedPost]] }
      })

    case actions.GET_USERS_WHO_LIKED_POST:
      let {usersList, id} = action.payload

      let currentPost1 = store.postsList.find((post) => post.id === id)
      let currentPost1Copy = {...currentPost1}
      currentPost1Copy.usersWhoLikedPost = usersList

      const indexOfCurrentPost1 = store.postsList.indexOf(currentPost1)

      return update(store, {
        postsList: { $splice: [[indexOfCurrentPost1, 1, currentPost1Copy]] }
      })

    case actions.SAVE_COMMENTS_FOR_POST:
      let { listOfComments, postId } = action.payload
      if (listOfComments.length === 0) return store

      let currentPost2 = store.postsList.find((post) => post.id === postId)

      let currentPost2Copy = {...currentPost2}
      currentPost2Copy.comments = listOfComments

      const indexOfCurrentPost2 = store.postsList.indexOf(currentPost2)

      return update(store, {
        postsList: { $splice: [[indexOfCurrentPost2, 1, currentPost2Copy]] }
      })

    case actions.ADD_NEW_COMMENT_FOR_POST:
      let { comment, postId: postId2 } = {...action.payload}
      return { ...store, comments: {...store.comments, postId: [...(store.comments.postId || []),comment ]} }
      // Andrew K


      // let currentPost3 = store.postsList.find((post) => post.id === postId2)
      // let currentPost3Copy = {
      //   ...currentPost3,
      //   comments: currentPost3.comments ? [...currentPost3.comments] : [],
      //   numberOfComments: currentPost3.numberOfComments + 1
      // }
      // currentPost3Copy.comments.push(comment)
      //
      // const indexOfCurrentPost3 = store.postsList.indexOf(currentPost3)
      //
      // return update(store, {
      //   postsList: { $splice: [[indexOfCurrentPost3, 1, currentPost3Copy]] }
      // })

    case actions.SAVE_COMMENTS_FOR_POST:
      const { listOfComments, postId } = action.payload
      // if (listOfComments.length === 0) return store

      // let currentComments = store.comments
      // we access the js-object that contains info about comments for all posts
      // key - postId, value -> [CommentRs,CommentRs,...]

      // let currentCommentsCopy = {...currentComments}
      // we make a shallow copy and that is wrong!
      // maybe, we should make a deep copy here?

      // currentCommentsCopy[postId] = [...currentCommentsCopy[postId],listOfComments]

      return { ...store, comments: {...store.comments, postId: listOfComments} }

    case actions.DELETE_COMMENT:
      const { commentId, postId } = action.payload
      const updatedComments = store.comments.postId.filter(c => c.id !== commentId)

      return { ...store, comments: {...store.comments, postId: updatedComments} }

    default: {
      return store
    }
  }
}

export default postReducer