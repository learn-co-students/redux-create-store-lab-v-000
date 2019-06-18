export default function createStore(reducer) {
	// add your code here
	let state;
	// function getState() {
	// 	return reducer.state;
	// }

	function dispatch(action) {
		state = reducer(state, action);
		render();
	}

	function getState() {
		return state;
	}

	return {
		dispatch,
		getState
	};
}
// let store = createStore(reducer);
// store.dispatch({ type: '@@INIT' });
function render() {
	const container = document.getElementById('container');
}
