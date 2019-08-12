// import candyReducer from './reducers/candyReducer.js'
// import countReducer from './reducers/countReducer.js'

function createStore(reducer) {
  // add your code here
  let state;

  const dispatch = (action)=> {
    state = reducer(state,action)
    render()
  }

  const getState = ()=>{
    return state;
  }

  return {
    getState,
    dispatch
  }
}

function render() {
  const container = document.getElementById('container');
}

const candyReducerDefaultState = []

function candyReducer(state = candyReducerDefaultState, action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

// let candyStore = createStore(candyReducer);
// dispatch({type: '@@INIT'})
let candyStore = createStore(candyReducer);
candyStore.dispatch('initialize')

// export default candyReducer;
//

const countReducerDefaultState = 0

function countReducer(state = countReducerDefaultState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
}

let countStore = createStore(countReducer);
countStore.dispatch('initalize')

// export default countReducer;
