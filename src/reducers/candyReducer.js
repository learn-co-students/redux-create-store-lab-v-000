import createStore from '../createStore'

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

let store = createStore(candyReducer);
store.dispatch({ type: '@@INIT' });

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

export default candyReducer;
