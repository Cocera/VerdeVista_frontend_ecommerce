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
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

    default:
      return state;
  }
};
export default users;