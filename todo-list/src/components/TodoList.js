import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filterByStatus = (todo) => {
    //filter ki kore? se puro array er upor loop kore. j array element gulo certian condition fulfill kore, tader jonno true return kore r fulfill na korle false. Tarmane filter proti iteration e sobsmoy true ba false return kore. j element gulor jonno true return kore, shei element gulo k niye notun array toiri kore.
    //current ki status deya ache seta nei. All naki Complete naki Incomplete.
    const { status } = filters;
    //ebar prottek array element, todo er jonno check kori, staus er sathe oi element er completed status mile kina. status "completed" thakle, oi todo te todo.completed true hle seta retunr kori. false hle false retun kori. tahole j todo gulor jonno tru pabe, segulo k niye e notun array toiri korbe. r false return kora todo gulo k bad diye dibe. ekhn jodi status thake incomplete, tahole j sob todo.completed=false, shei sob to return kora lagbe. tahole, oi false gulo k ! diye true hisebe true kori. tahole sudhu oi todo er gulo filtered array te store hobe. jodi status all thake, tahole true return kori by default. checking er dorkar nai.
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
    //tahole notun array pelam. ebar chainng kore notu array er color match kore kina check kore, finally map korbo.
  };

  //ebar filter e j color gulo deya ache, tar modde kono color jodi oi array element e thake, tahole shei element er jonno true pathabe.

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}
