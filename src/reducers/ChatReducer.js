import { typesActionReducers } from "../types";

export const initialState = {
  messages: [],
  users: [],
  currentUser: {},
  currentChannel: {},
  channels: [],
  isLoading: false,
  error: null,
};

export const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesActionReducers.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            ...action.payload,
          },
        ],
      };
    default:
      return state;
  }
};
