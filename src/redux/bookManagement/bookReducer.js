import books from "../../fakeData/books.json";
import {
  ADD_TO_FINISHED_LIST,
  ADD_TO_READING_LIST,
  REMOVE_FROM_READING_LIST,
} from "./bookActionType";
const initialState = {
  totalBookList: books,
  readingList: [],
  finishedList: [],
};
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_READING_LIST:
      return {
        ...state,
        readingList: [...state.readingList, action.type],
      };
    case REMOVE_FROM_READING_LIST:
      return {
        ...state,
        readingList: [
          state.readingList.filter((book) => book.id === action.payload),
        ],
      };
    case ADD_TO_FINISHED_LIST:
      return state;
    default:
      return state;
  }
};
export default bookReducer;
