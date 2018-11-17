// first attempt 5/22/18
// export default function createStore(reducer) {
//   let state;
//
//   function dispatch(action){
//     state = reducer(state, action);
//     render();
//   }
//
//   function getState(){
//     return state;
//   }
//
//   dispatch({type: '@@INIT'});
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

// second attempt 11/17/18

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  };

  function getState() {
    return state;
  }
  dispatch({type: '@@INIT'});

  return {
    dispatch,
    getState
  };
};

function render() {
  const container = document.getElementById('container');
}
