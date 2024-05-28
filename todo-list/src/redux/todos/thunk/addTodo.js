//thunk e to current text ta pabona. thunk function sudhu 2 ta parameter nei: dispatch, getState. sejonno directly thunk function call korbo na. normal function call kore tar vitor text data ta nibo. ekhn oi normal function ta return kore dibe thunk function ta. tahole thunk function kei call kore holo. majhe amra text data ekhn thunk function e access korte parbo.

import { added } from "../actions";

//ekhn thunk function e server e input data ta post kori. Server updated state k pathiye dibe. shei updated state k response er vitor pabo. ekhn respose k json e convert korle, sudhu posted body er object ta pabo. baki info bad. ekhn oi json object k todo name e niye, shei server theke pawa updated todo k localState e rakhte dispatch kori.

//tar mane first e server e store korlam. tarpor localState k update korlam.

const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // -------------
    const todo = await response.json();

    dispatch(added(todo.text));

    // console.log(response, todo);

    //--------------

    //tobe localstate k update na kore, server e post korar por fetch kore nileo ui update hoye jabe. tahole localState k aladavabe update kora laglo na. server er data ene e dekhabe.

    //tobe somossa ache. server request bere jacche. real-life application e eto bar server request korle, application slow hoye jabe. sejonno server request 1 bar kori. Post request korar por serve updated toto ta pathiye dibe. ei updated state k json e convert kore, shei updated state er text diye localState k update korbo.

    //dispatch(fetchTodos);
  };
};

export default addTodo;
