import { loaded } from "../actionIdentifiers";

const fetchBooks = async (dispatch) => {
  const responce = await fetch("http://localhost:9000/books");
  const todos = await responce.json();

  dispatch(loaded(todos));
};

export default fetchBooks;
