import candyReducer from "./reducers/candyReducer";
import countReducer from "./reducers/countReducer";


export default function createStore(reducer) {
  let state;
  
  //Note: Don't forget, your initial state for each store should be set by the reducer. You'll have to dispatch some sort of 'initialize' action to get your state set!
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  //getState should return the current state
  function getState() {
    return state;
  }

  dispatch({ type: "@@INIT" });
  
  return { dispatch, getState }
}

function render() {
  const container = document.getElementById('container');
}

// candyStore = createStore(candyReducer).dispatch({ type: "init" })


