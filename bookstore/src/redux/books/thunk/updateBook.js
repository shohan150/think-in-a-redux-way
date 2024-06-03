import { edit } from "../actionIdentifiers";

const updateBook = (bookData) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookData.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...bookData,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const book = await response.json();

    dispatch(edit(book));
  };
};

export default updateBook;
