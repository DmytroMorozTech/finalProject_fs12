const initialStore = {
  activeUser: {
    'id': 1,
    'fullName': 'Richard West',
    'email': 'richard@gmail.com',
    'phoneNumber': '+380502926823',
    'age': '20',
    'avatarUrl': 'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
    'positionAndCompany': 'Sales manager at Microsoft'
  }
}

const userReducer = (store = initialStore, action) => {
  switch (action.type) {
    default: {
      return store
    }
  }
}

export default userReducer