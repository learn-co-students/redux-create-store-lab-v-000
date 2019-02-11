
export default function createStore(reducer,initialState) {
  let state;
  // const store = {};
  // store.state = ;
  // store.listeners = [];
  //
  // store.getState = () => store.state
  // store.dispatch = (action) => {
  //   store.state = reducer(store.state, action)
  //
  // }
  // store.subscribe = (listener) => {
  //   store.listeners.push(listener);
  // }

  function dispatch(action){
    state = reducer(state, action)
    // store.listeners.forEach(listener => listener())
  }

  function setState(reducer){

    this.state = state;
  }
  function getState(){
    return state
  }
  dispatch({})

  return {dispatch, getState}
}
