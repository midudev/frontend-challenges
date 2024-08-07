const isEverySettingFalse = (state) => {
	return [state.lower, state.upper, state.number, state.symbol].every((v) => !v)
}

/**
 * It allows you to control the configuration properties to generate passwords
 * and also prevents all empty configurations from being sent.
 *
 */
export function passwordReducer(state, action) {
	switch (action.type) {
	case 'length': {
		return { ...state, length: action.payload }
	}
	case 'lower':
	case 'upper':
	case 'number':
	case 'symbol': {
		const newState = { ...state, [action.type]: !state[action.type] }

		if (isEverySettingFalse(newState)) {
			return { ...newState, lower: true }
		}

		return newState
	}
	default:
		return state
	}
}
