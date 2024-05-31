import { ADD, EDIT, REMOVE } from "./actionTypes";

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
