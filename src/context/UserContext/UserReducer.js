const users = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
        };
      case "LOGOUT":
        return {
          ...state,
          user: null,
          token: null
        };
    
      default:
        return state;
    }
  };
  export default users;