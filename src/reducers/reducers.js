import Constants from "../utils/Constants";

const chatBusReducers = (state = {
  messages: []
}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case Constants.SEND_MESSAGE:
      newState.messages = [...state.messages, {name: action.data.name, message: action.data.message}];
      return newState;

    default:
      return state;
  }
};

export {chatBusReducers};
