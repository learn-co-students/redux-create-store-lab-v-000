export default function createStore(reducer) {
  let state;

  function dispatch(action){ //dispatch is now private , function needs to be catched when an event 
                            // occurs. so it is put in a method, here called createStore
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state;
  };

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}

//let store = createStore(someReduce)