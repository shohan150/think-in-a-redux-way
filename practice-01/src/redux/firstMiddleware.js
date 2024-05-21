import rootReducer from "./rootReducer";

//middlewares: we know the redux flow: action -> store -> state. middleware ei flow er modde bose jabe. action hle seta store e jawar age e, take intercept kore, kichu modify kore tarpor store e ba dhukbe ba reducer function kaj shuru korbe.

//middles functions are curried functions. Means it will take only one parameter and return another function if another parameter is needed.

// means instead of function multiply(a,b,c){
//    return a*b*c
// }
// we write function multiply(a){
//    return function(b){
//       return function(c){
//          // ekhn ei function e a,b,c 3 tai available
//          return a*b*c
//       }
//    }
// }
// subidha holo more control. step by step ekta kore parameter asbe. ja sche tar upor operation kore notun parameter nibo. onketa curry bananor moto ektar por ekta ingredient add kora hocche. eta k bolche currying.

//store e full store er reference pabo. jate vanilla redux er moto store.dispatch(), store.dispatch() korte pari. mane store object ta pacchi.
//next holo, ei j reducer e dhukar age j atkai fellam, take charte hoi next diye.
//r action holo dispatch e j action ta pathano hoyeche, shei action.

//structure: logger k call korle se ekta anonymous function call korbe j parameter hisebe nei store k. se abar r ekta anonymous function call korbe next parameter diye.Finally action parameter diye arekta anonymous function call hobe.

// amra simple ekta middleware banabo j kono action hle e action e dhukar somoy state er value print korbe.

const logger = (store) => (next) => (action) => {
  // reducer e j action jache seta dekhbo.
  console.log(`Action: ${JSON.stringify(action)}`);
  //reudcer e dhukar age e current state ek dekhbo
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  //   ekhon ami chacchi, reducer e jawar age e, reducer e jawar por ki valu pabo seta  dekhte chai. ekhn amader kache reducer ache (assuming middleware er code store.js ei thakbe). tahole reducer er jonno lagbe current state jeta store.getState() diye pawa jabe. R ekhn magic, asole magic navigator. ekhane lagbe js er array method reduce er basic. jeta amra course er first ei discuss korechi.

  const upcomingState = [action].reduce(rootReducer, store.getState());

  //ekta array te single element hisebe action object ta k rakhlam. tarpor array tar upor reduce method apply korlam. jate array er protita element(jodio ekhetre lement 1 tai) er upor reducer function k apply korbe o initialState hisebe store.getState() k nibe.

  console.log("upcoming counter value : " + JSON.stringify(upcomingState));

  // ekhon ami chacchi,

  //let the action got to the reducer.
  return next(action);
};

export default logger;
