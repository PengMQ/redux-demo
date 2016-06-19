
window.onload = test;

function test(){
	const createStore = Redux.createStore; //Redux provide the important function createStore which is to create a sore.
	const store = createStore(counter); // To create a store, the function createStore need a dispatcher as argument.

	var render = function(){
		document.body.innerText = store.getState();

	}
	store.subscribe(render); //The store need to subscribe with a function which is what would you like to do when the store changed.
	render();

	document.addEventListener('click', function(){ // Dispatch the store when some specific action trigged.
		store.dispatch({type: 'INCREMENT'});
			});
}

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
