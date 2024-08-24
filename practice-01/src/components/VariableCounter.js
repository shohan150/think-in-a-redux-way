import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actionCreators";
import {
  decrement as dynamicDecrement,
  increment as dynamicIncrement,
} from "../redux/dynamicCounter/actions";

//this component was the counter componet before. that is now turned into variableCounter. ekhane connect diye kora hoise. jodio seta lagbe na. ekhane etatke rakhar mul karon ownprops use dekhano. connet diye na kore ditectly korleo hoto. 

function VariableCounter({ count, increment, decrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

//these are used when you use connect in redux, to declare state and dipatch related with the component.

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? (value) => dispatch(dynamicIncrement(10))
      : () => dispatch(increment()),
    decrement: ownProps.dynamic
      ? (value) => dispatch(dynamicDecrement(5))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
