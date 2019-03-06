const initialUserState = {
  user: false
}

export default function isLoggedIn(state = initialUserState, action) {
  switch (action.type){
    case 'LOGIN':
      return {user: action.user}
    case 'LOGOUT':
      return initialUserState
    default:
      return state 
  }
}
