import { ADD_ARTICLE, CHANGE_STATE } from "./constants/action-types"

// Redux Store
const initialState = {
  link: 'https://medicydb.herokuapp.com/',
  // link: 'http://localhost:5000',
  user: '',
  userperm: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      state.articles.push(action.payload);
      return state;
    case CHANGE_STATE:
      const changedState = action.payload
      return {
        ...state,
        ...changedState
      }
    default:
      return state;
  }
};
  
  export default rootReducer;