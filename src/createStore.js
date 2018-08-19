export default function createStore(reducer) {
  // add your code here
  let state;
  //Have the supplied reducer run its '@@INIT' action to initialize the state
  state=reducer(state,{type: "@@INIT"})
  
  //Set up the agnostic dispatch function using the provided reducer
  function dispatch(action){
    state=reducer(state,action);
    render();  //This was provided below for this lab
  }
  
  
  //Returns the state for use in other functions
  function getState(){
    return state;
  }
  
  
  //Returns an object with the dispatch and getState functions written above, will turn into 'methods' for this store object
  return(
    {dispatch, getState}
  )
  
  
  
  
}

function render() {
  const container = document.getElementById('container');
}
