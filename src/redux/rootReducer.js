import { combineReducers } from "redux";
import bookReducer from "./bookManagement/bookReducer";

const rootReducer = combineReducers({
  book: bookReducer,
});
export default rootReducer;
