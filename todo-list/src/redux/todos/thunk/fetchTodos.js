import { loaded } from "../actions";

const fetchTodos = async (dispatch, getState) => {
  const responce = await fetch("http://localhost:9000/todos");
  const todos = await responce.json();

  dispatch(loaded(todos));
};

export default fetchTodos;
