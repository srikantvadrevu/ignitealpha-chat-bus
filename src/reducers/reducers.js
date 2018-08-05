import Constants from "../utils/Constants";

function chatBusReducers (state = {}, action) {
  switch(action.type) {
    case Constants.SEND_MESSAGE:
      state.messages.push({name: action.data.name, message: action.data.message});
      return state;
    default:
      state.messages = [];
      return state;
  }
}
//{messages: [{name: 'Srikant', message: 'hello world'},{name: 'Amigo', message: 'hola world'}]}
export {chatBusReducers};