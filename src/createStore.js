import candyReducer from '../src/reducers/candyReducer';
import countReducer from '../src/reducers/countReducer';

export default function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  dispatch({type: '@@init'})

  return (
    dispatch,
    getState
  )
}

function render() {
}

let candyStore = createStore(candyReducer);
let countStore = createStore(countReducer);
