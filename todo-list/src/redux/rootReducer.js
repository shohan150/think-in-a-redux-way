import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todoReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;

// here's some extra, inner info: We have seen vanilla redux nijer theke initial state k call kore na. borong amader k code e ekbar render() invoke korle tokhon initial state er value ta application peye jai.

// Kintu ekhane redux devtools e dekhba, j @@init name ekta action dispatch hoye ache. ei kaj ta react-redux package kore. se initially ekbar reucer gulo k call kore dei jate puro application initialState diye cholte pare. amader k manually intial render kora laglo na.
