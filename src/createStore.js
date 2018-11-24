export default function createStore(reducer) {
  // add your code here
}


function createStore(reducer){
	let state;

	function dispatch(action){
		state = reducer(state, action)
		render()
	}
	dispatch({ type: '@@INIT' })

	function getState(){
		return state
	}

	return {
		dispatch,
		getState
	}
}




function render() {
  const container = document.getElementById('container');
}


// let countStore = createStore(countReducer)
// countStore.dispatch({ type: '@@INIT' })