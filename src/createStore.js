// import countReducer from './reducers/countReducer'
// import candyReducer from './reducers/candyReducer'

export default function createStore(reducer) {
  let state;
  
  const dispatch = (action) => {
    state = reducer(state, action)
    render()
  }
  
  const getState = () => state;

  dispatch({ type: '@@INIT' })
  
  return {dispatch, getState}
}




function render() {
  const container = document.getElementById('container');
}

