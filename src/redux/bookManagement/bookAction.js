import {
  ADD_TO_FINISHED_LIST,
  ADD_TO_READING_LIST,
  REMOVE_FROM_READING_LIST,
} from "./bookActionType";

export const addToReadingList = (book) => {
  return {
    type: ADD_TO_READING_LIST,
    payload: book,
  };
};
export const removeFromReadingList = (book) => {
  return {
    type: REMOVE_FROM_READING_LIST,
    payload: book,
  };
};
export const addToFinishedList = (id) => {
  return {
    type: ADD_TO_FINISHED_LIST,
    payload: id,
  };
};
