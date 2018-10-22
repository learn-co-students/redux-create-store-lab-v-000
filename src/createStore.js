import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer';

export default function createStore(reducer) {
		let state;

		function dispatch(action) {
			state = reducer(state, action);
			render();
		}

		dispatch({ type: '@@INIT' });

		function getState(){
			return state;
		};

		return{
			dispatch,
			getState
		};
  // add your code here
}

function render() {
  const container = document.getElementById('container');
}
