import * as actions from './postActionTypes'

const initialStore = {
  postsList: [],
  loading: false
}

const postReducer = (store = initialStore, action) => {
  switch (action.type) {
    case actions.LOADING_POSTS:
      return {...store, loading: action.payload}

    case actions.SAVE_POSTS:
      return { ...store, postsList: action.payload }

    case actions.ADD_NEW_POST:
      return { ...store, postsList: [...store.postsList, action.payload] }

    default: {
      return store
    }
  }
}

export default postReducer