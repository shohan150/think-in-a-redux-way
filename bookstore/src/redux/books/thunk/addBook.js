import { add } from "../actionIdentifiers";

const addBook = (bookData) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        ...bookData,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const book = await response.json();

    dispatch(add(book));
  };
};

export default addBook;
