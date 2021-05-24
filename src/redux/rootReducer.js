import { combineReducers } from "redux";
import bookReducer from "./bookManagement/bookReducer";

const rootReducer = combineReducers({
  books: bookReducer,
});
export default rootReducer;
