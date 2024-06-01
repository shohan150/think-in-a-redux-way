import { BOOKDATA, ISEDIT } from "./actionTypes";

const initialState = {
  isEdit: false,
  bookData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKDATA:
      return {
        ...state,
        bookData: action.payload,
      };

    case ISEDIT:
      return {
        ...state,
        isEdit: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
