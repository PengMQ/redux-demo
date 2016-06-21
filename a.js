
window.onload = test;

function test(){
	const createStore = Redux.createStore; //Redux provide the important function createStore which is to create a sore.
	const store = createStore(counter); // When you create a store, you need to specify a 'reducer' to tell store how to manage state.

	var render = function(){
		document.body.innerText = store.getState();

	}
	
	 /*  The store has 3 important methods:
     store.getState() -> get the current state
     store.dispatch({type: 'INCREMENT'}) -> dispatch actions to update state
     store.subscribe(callback) -> It allow you to register a callback, the callback will be invoked anytime when an action is dispatched.

 */
	store.subscribe(render); //The store need to subscribe with a function which is what would you like to do when the store changed.
	render();

	document.addEventListener('click', function(){ // Dispatch the store when some specific action trigged.
		store.dispatch({type: 'INCREMENT'});
			});
}

/* This counter method is very important in Redux, it is call 'reducer'.
    It accept to arguments: state and action. It's main work is to update the state value based on action type.
    Because in redux, state is immutable, so you cannot change state directly, you update state by returning values calculated with state.
    And there are two conventions: 1, need to specify the initial value of state; 2, for default case of action, return state.
*/
function counter(state, action){
	console.log('HAHA', state);
	if(state === undefined){
		return 0;
	}
	switch (action.type){
		case 'INCREMENT': 
		return state + 1;
		case 'DECREMRNT':
		return state -1;
		default: 
		return state;
	}
}
