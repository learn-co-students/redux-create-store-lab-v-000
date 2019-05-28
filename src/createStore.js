export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
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
  const main = document.getElementById('main');
  // var content = countStore ? store.getState() : 0
  // main.append(content);
}

// var candyStore = createStore(candyReducer);
// var countStore = createStore(countReducer);
//
// var countUpButton = document.getElementById('count-up-button');
// var countDownButton = document.getElementById('count-down-button');
//
// countUpButton.addEventListener('click', function() {
//   store.dispatch({ type: 'INCREASE_COUNT' });
// });
//
// countDownButton.addEventListener('click', function() {
//   store.dispatch({ type: 'DECREASE_COUNT' });
// });
