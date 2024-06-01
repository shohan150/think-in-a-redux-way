import { SEARCHTERM, TOOGLE } from "./actionTypes";

export const toogle = (showFeatured) => {
  return {
    type: TOOGLE,
    payload: showFeatured,
  };
};

export const searchTerm = (searchTerm) => {
  return {
    type: SEARCHTERM,
    payload: searchTerm,
  };
};
