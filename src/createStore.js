export default function createStore(reducer){
  let state

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  dispatch({ type: '@@INIT' })

  return {
    dispatch,
    getState
  }
}

// solution
export default function createStore(reducer){
}

function render(){
  const container = document.getElementById('container')
}
