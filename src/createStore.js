export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  };

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  };

};

function render() {
  const container = document.getElementById('container');
}



//You'll have to dispatch some sort of 'initialize' action to get your state set!
