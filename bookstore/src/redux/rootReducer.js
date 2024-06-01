import { combineReducers } from "redux";
import bookReducer from "./books/reducer";
import filterReducer from "./filter/reducer";
import formReducer from "./form/reducer";

const rootReducer = combineReducers({
  books: bookReducer,
  filters: filterReducer,
  form: formReducer,
});

export default rootReducer;
