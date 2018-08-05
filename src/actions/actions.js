import Constants from "../utils/Constants";

export default function sendMessage(name, message) {
  return {
    type: Constants.SEND_MESSAGE,
    data: {
      name,
      message
    }
  }
}