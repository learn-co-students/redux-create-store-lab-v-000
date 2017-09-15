export default function createStore(reducer) {
    let state;
    
    let getState = () =>{ return state}

    let dispatch = (action) => {
      state = reducer(state, action)
      render()
    }
     dispatch({type: '@@INIT'})
    return { dispatch, getState}
  }


function render() {
  const container = document.getElementById('container');
}
