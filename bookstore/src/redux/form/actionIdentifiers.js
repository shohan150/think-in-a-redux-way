import { BOOKDATA, ISEDIT } from "./actionTypes";

export const startEdit = (isEdit) => {
  return {
    type: ISEDIT,
    payload: isEdit,
  };
};

export const setBookData = (bookData) => {
  return {
    type: BOOKDATA,
    payload: bookData,
  };
};
