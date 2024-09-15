import { SET_USER_INFO } from '../actions';
const initialState = {
  userName: '',
  userStatus: '',
};
const reduserUserInfo = (state = initialState, action) => {
  if (action.type === SET_USER_INFO) {
    return {
      ...state,
      userName: action.payload.name,
      userStatus: action.payload.status,
    };
  }
  return state;
};
export default reduserUserInfo;
