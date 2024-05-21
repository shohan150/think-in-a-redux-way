import { DECREMENT, INCREMENT } from "./actionTypes";

//ekhane sob actions er jonno reducer e j input pathano hbe, shei input declare kore rakhe hocche.

//Tahole dispatch e sudhu ei const ta r const e value ta pass korle e cholbe. Barbar puro object likha lagbe na dispatch e.

//tahole j file e j action dispatch lagbe, sudhu seta k import korle e cholbe.

export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
