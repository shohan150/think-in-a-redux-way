import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actionCreators";

function Counter({ count, increment, decrement, id }) {
  console.log("Component ID : " + id);
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          //   onClick event e increment prop k invoke korbe j asole increment actionIdentifier k dispatch korar jonno reducer e pathabe.
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

//ei function ta jehetu state k prop e convert korbe, tai obossoi state k function e pathate hobe. Ekhn, conversion ta k korbe? ei kaj ta redux nije e kore nibe internally. se state k prop e convert kore felbe. ei funtion er nam onno kichu o deya jete pare.

//Ei function theke ekta object return korte hobe. shei object tai muloto hobe props.

//I GUESS, initially react-redux Provider e deya store theke, initialState k mapStateToProps e state hisbe pathai. Tarpor kono action dispatch hle store updated state pathai dei o shei updated state k tokhon prop hisebe pathai. Kintu amar prosno j multiple reducer hle tokhon kivabe manage korbe? setar answer VariableCounter e paba. Sekhane comninator er vitor reducer j point kore dilei, shei reducer er initalState niye nibe.

const mapStateToProps = (state, ownProps) => {
  // state k props e convert korlam. ekhn Counter component e {count} dile, ei value ta component e pabo.
  console.log(ownProps);
  return {
    count: state.value,
  };
};

//dispatch k props e convert korbe.

const mapDispatchToProps = (dispatch) => {
  // amra jehetu react-redux diye connect korechi, tai store.dispatch() use kora lagbe na. Dispatch ei function e peye jabo ba react-redux diye dibe ei function k. shei dispatch k prop hisebe pathacchi.

  // to shei prop k call korle dispatch k call korte hobe. ekhn increment:dispatch() to likhte parbo na. karon ekahne e call hoye jabe. sejonno increment e ekta anonymous function er vitor dispatch call kore rakhbo. tahole ei increment k call korle e dispatch call hoye jabe.

  //we action identifiers/Creators e sobai arrow function. shei arrow function e payload er value pass korle e cholbe.

  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

//react-redux package ta react er sathe redux er binding kore. Ei binding er kaj ta kore connect() function.

// ei connect k call korle se ekta higher order component dei. Higher order function input hisebe ekta function nei, ebong output e r ekta function dei. ei connect function take invoke korle; connect(), se return kore ekta higher order component. Mane Higher order function er moto e, higher order component, connect(), input nibe ekta component k r output dibe onno ekta component.

//ekhn connect er 2ta parameter dorkar. ei function 2 ta respectively state o dispatch k props e convert kore.

//tahole connect() dicche ekta higher order component, setate amra pass korbo 2 ta function paramter hisebe r ekta react component. Ekhn react-redux er connect() ei, state, dispatch k prop hisbe oi react component e pathabe r finally notun component k return korbe, setake amra export korbo.

//Tahole react-redux package react o redux er modde connection toiri korlo. eta vanilla readus theke alada. vanilla redux e store e store.subcribe() kore directly state pete hoi. store.dispatch() directly action dispatch korte hoto. r ekhane react-redux package connection er kaj ta kore dibe. amra ei package er through te store e access korbo.

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
