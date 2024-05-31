import { ADD, EDIT, REMOVE } from "./actionTypes";
const initialState = [
  {
    id: 1,
    title: "The Clean Code",
    author: "Robert C. Martin",
    rating: "4",
    price: "440",
    isFeatured: false,
    cover:
      "https://bci.kinokuniya.com/jsp/images/book-img/97801/97801323/9780132350884.JPG",
  },
];

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), 0);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: nextBookId(state),
          ...action.payload,
        },
      ];

    case EDIT:
      return state.map((book) => {
        if (book.id !== action.payload.id) return book;
        return action.payload;
      });

    case REMOVE:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
