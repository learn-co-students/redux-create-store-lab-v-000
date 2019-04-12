//import candyReducer from './reducers/candyReducer';
//import countReducer from './reducers/countReducer';

function render() {
	const container = document.getElementById('container');
}

export default function createStore(reducer) {
	let state;
	const dispatch = (action) => {
		state = reducer(state, action);
		render();
	}
	const getState = () => state;
	return { dispatch, getState };
}

// const candyStore = createStore(candyReducer);
// const countStore = createStore(countReducer);

// candyStore.dispatch({type: "init"});
// countStore.dispatch({type: "init"});

// candyStore.dispatch({type: "ADD_CANDY"});
// countStore.dispatch({type: "INCREMENT_COUNT"});