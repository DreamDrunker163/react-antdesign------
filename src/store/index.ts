// createStore已弃用
import { legacy_createStore as createStore } from 'redux'

const userReducer = (
	state = {
		user: {
			userInfo: {}
		}
	} as any,
	action: any
) => {
	return state
}

const store = createStore(userReducer)

export default store
