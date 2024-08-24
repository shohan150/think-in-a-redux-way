import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGLED,
} from "./actionTypes";
import initialState from "./initialState";

//New todo add korar somoy loop use kore currently existing todos er id theke max id ber kore tar sathe 1 jog kore setake new todo er id hisebe rakhbo. Ei loop ta chalano hbe reduce method() use kore.
const nextTodoId = (todos) => {
  //reduce puro array er upor operation kore/ array k reduce kore ekta single output dei. se ekta callback function nei o ekta initial value (-1).
  //ekhn callback function/ reducer 2 ta parameter nei. current state (maxId) o array element ta (todo), jar upor operation kora hobe.
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);

  //finally, maxId er sathe 1 jog kore return kori.
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    case LOADED:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
