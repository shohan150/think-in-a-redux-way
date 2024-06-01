import { SEARCHTERM, TOOGLE } from "./actionTypes";
const initialState = {
  showFeatured: false,
  searchTerm: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE:
      return {
        ...state,
        showFeatured: action.payload,
      };

    case SEARCHTERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
