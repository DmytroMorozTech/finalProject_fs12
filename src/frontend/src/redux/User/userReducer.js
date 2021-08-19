import update from 'immutability-helper'
import * as actions from '../User/userActionTypes'

const initialState = {
  activeUser: {
    id: 1,
    fullName: 'Richard West',
    email: 'richard@gmail.com',
    phoneNumber: '+380502926823',
    age: '20',
    avatarUrl: 'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
    positionAndCompany: 'Sales manager at Microsoft'
  },
  educations: [],
  certifications: [],
  workPlaces: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_EDUCATION:
      return { ...state, educations: [ ...state.educations, action.payload ] }

    default: {
      return state
    }
  }
}

export default userReducer