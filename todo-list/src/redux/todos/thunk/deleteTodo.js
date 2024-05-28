import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });

    //ekhane await responce.json() korar dorkar nei. karon, server theke delete e kore diyechi. tai reponse neyar kichu nei.

    //r ekehane server theke asa todo.id na borong parameter e asa todoId diyei locaState theke delete kore dile e cholbe.

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
