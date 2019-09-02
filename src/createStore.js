import candyReducer from './reducers/candyReducer.js'

import countReducer from './reducers/countReducer.js'

export default function createStore(reducer) {

  let state;

  function dispatch(action){
    state = reducer(state, action);
    render()
  }

  function getState() {
    return state;
  };
 
  return {
    dispatch,
    getState
  };
}


function render() {
  let offeringsContainer = document.getElementById('offerings-container');
  offeringsContainer.textContent = store.getState().count;
};
 
let offeringsStore = createStore(candyReducer); 

offeringsStore.dispatch({ type: '@@INIT' });

let offeringsButton = document.getElementById('offerings-button');
 
offeringsButton.addEventListener('click', function() {
  store.dispatch({ type: 'ADD_CANDY' });
});





function render() {
  let salesCountContainer = document.getElementById('sales-count-container');
  salesCountContainer.textContent = store.getState().count;
};

let salesCountStore = createStore(countReducer); 

salesCountStore.dispatch({ type: '@@INIT' });



let salesCountIncreaseButton = document.getElementById('sales-increment-count-button');
 
salesCountIncreaseButton.addEventListener('click', function() {
  store.dispatch({ type: 'INCREMENT_COUNT' });
});

let salesCountDecreaseButton = document.getElementById('sales-decrement-count-button');
 
salesCountDecreaseButton.addEventListener('click', function() {
  store.dispatch({ type: 'DECREMENT_COUNT' });
});
