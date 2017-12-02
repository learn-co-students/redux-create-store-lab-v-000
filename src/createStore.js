import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer';

export default function createStore(reducer) {
  let state;

  dispatch = (action) => {
    state = reducer(state, action)
    render()
  }

  getState = () => {
    return state;
  }

  dispatch({type: "@@INIT"})

  return { getState, dispatch }
  
}

function render() {
  const container = document.getElementById('container');
}
