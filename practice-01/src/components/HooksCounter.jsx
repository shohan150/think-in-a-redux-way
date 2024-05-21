import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actionCreators";

// The useSelector hook allows access to the state stored in a Redux store, while the useDispatch hook enables dispatching of actions to the store.

// connect is a high-order component, useSelector is a hook. Using useSelector can reduce the boilerplate code and embeds that logic within the components themselves.

function HooksCounter() {
  // useSelector ki kore? UseSelector select kore. Se ekta callBack function nei ebong store e thaka state theke data select kore niye ase.

  // When a component subscribes to the store using the useSelector hook, it will re-render whenever the state it is subscribed to changes. Question: tahole ki main state change hle e re-render kore felbe? naki sudhu oi reference ta change hle re-render korbe? test korte hbe samne. karon jodi 2nd ta hoi. tahole shera.

  const count = useSelector((state) => state.counter.value);

  //useDispatch function kono parameter nei na. Dispatch direct call kore deya jabe actionIdentifier pass kore.

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-xl font-semibold">Hook Counter</div>
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHandler()}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHandler()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HooksCounter;
