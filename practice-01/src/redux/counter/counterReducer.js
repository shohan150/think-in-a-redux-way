import { DECREMENT, INCREMENT } from "./actionTypes";

//Declaring the initial state
const initialState = {
  value: 3,
};

//imports actionTypes. Main code theke action dispatch kora hle, ekhane actionType mile gele, se hisebe returns korbe updated state k r initalState er jaigai notun updaedDtate object k rakhbe.

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
