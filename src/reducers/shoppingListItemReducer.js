export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log("current state.items length s", state.items.length)
			console.log("update state items length,",state.items.length + 1)
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			console.log("initial state. items lengths ")
			return state;
	}
}
