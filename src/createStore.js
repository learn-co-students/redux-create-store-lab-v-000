export default function createStore(reducer) {
  let state;

  const dispatch = action => {
    state = reducer(state, action)
    render()
  }
  const getState = () => { return state }

  dispatch({ type: '@@INIT' })

  return { dispatch, getState }
}

const render = () => { const container = document.getElementById('container') }


// export default function createStore(reducer) {
//   let state;
//
//   function dispatch(action) {
//     state = reducer(state, action);
//     render();
//   }
//   function getState() {
//     return state;
//   };
//
//   dispatch({ type: '@@INIT' })
//
//   return {
//     dispatch,
//     getState
//   };
// }
//
// function render() {
//   const container = document.getElementById('container');
// }



// For now, we'll want to create two different stores - one to keep track of all of the types
// of candy we sell, and one to keep track of the count of the sales that we've had (Later on,
//    we'll learn how we can manage multiple pieces of state in one store).
//
// In createStore.js, write a function called createStore that takes in a reducer function as an
// argument. We've provided the reducer functions for you so you can get a sense of how they'll
// work.
// The createStore function should return an object with two methods - getState, dispatch.
// getState should return the current state.
// dispatch should take in an action, update the state using the reducer, and call the render
//  function.

// Note: Don't forget, your initial state for each store should be set by the reducer. You'll
// have to dispatch some sort of 'initialize' action to get your state set!
