import { ADD, EDIT, LOADED, REMOVE } from "./actionTypes";

export const add = (book) => {
  return {
    type: ADD,
    payload: book,
  };
};

export const edit = (book) => {
  return {
    type: EDIT,
    payload: book,
  };
};

export const remove = (bookId) => {
  return {
    type: REMOVE,
    payload: bookId,
  };
};

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};
