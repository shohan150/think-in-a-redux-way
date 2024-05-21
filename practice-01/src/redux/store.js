import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";

// redux related sob kichu redux folder e thakbe. Folder joto gulo e hok, store ektai. Ekhan theke e sob reducer k access korte hobe.

// create redux store using createStore(). Now access the reducer and updated state from the store.

const store = createStore(counterReducer);

export default store;
