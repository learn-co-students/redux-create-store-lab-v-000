// import countReducer from './reducers/candyReducer'
// import candyReducer from './reducers/candyReducer'

export default function createStore(reducer) {
  let state;
  
  function dispatch(action) {
    state = reducer(state, action)
  }

  dispatch({ type: '@@INIT'})

  function getState() {
    return state
  }
  return {dispatch, getState}
}
  // let state;

  // function dispatch(action) {
  //   state = reducer(state, action)
  //   render()
  // }

  // function getState() {
  //   return state
  // }

  // return {
  //   dispatch,
  //   getState
  // }


// function render() {
//   const container = document.getElementById('container');
//   container.textContent = store.getState().count
// }

// let store = createStore(reducer)
// store.dispatch({ type: '@@INIT'})

// let button = document.getElementById('button');
 
// button.addEventListener('click', function() {
//   store.dispatch({ type: 'INCREMENT_COUNT' });
// });

