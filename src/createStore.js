export default function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action); // State == return of ChangeState func
    render(); // Update our HTML each time
  }

  function getState(){
    return state;
  }

  dispatch({type: 'INIT'}) // Gives us an inital rendering of the state & Ability to set initial state in reducer

  return {
    dispatch,
    getState
  };
};

function render() {
  const container = document.getElementById('container');
}
