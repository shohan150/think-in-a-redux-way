import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

// The useSelector hook allows access to the state stored in a Redux store, while the useDispatch hook enables dispatching of actions to the store.

// connect is a high-order component, useSelector is a hook. Using useSelector can reduce the boilerplate code and embeds that logic within the components themselves.

function HooksCounter() {
  // useSelector ki kore? UseSelector select kore. Se ekta callBack function nei ebong store e thaka state theke data select kore niye ase.

  // When a component subscribes to the store using the useSelector hook, it will re-render whenever the state it is subscribed to changes. Question: tahole ki main state change hle e re-render kore felbe? naki sudhu oi reference ta change hle re-render korbe? test korte hbe.
  const count = useSelector((state) => state.value);

  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHandler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHandler(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HooksCounter;
