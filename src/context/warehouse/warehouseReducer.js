import {
  GET_ITEMS,
  DELETE_ITEM,
  SHOW_ITEM,
  EDIT_LOAD,
  SHOW_ALERT,
  REMOVE_ALERT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        list: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: action.payload,
      };
    case SHOW_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    case EDIT_LOAD:
      return {
        ...state,
        list: action.payload,
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
