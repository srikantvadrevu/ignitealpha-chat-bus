import Constants from "../utils/Constants";

/**
 * Chatbus application reducers.
 */
const chatBusReducers = (state = {
  messages: [],
  name: ''
}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case Constants.SEND_MESSAGE:
      newState.messages = [...state.messages, {name: action.data.name, message: action.data.message}];
      return newState;

    case Constants.UPDATE_USER_NAME:
      newState.name = action.data.name;
      return newState;

    default:
      return state;
  }
};

export {chatBusReducers};