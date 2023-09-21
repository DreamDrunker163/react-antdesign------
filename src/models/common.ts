export default {
	namespace: 'common',
	state: {
		collapse: false
	},
	subscriptions: {
		setup({ dispatch, history }: { dispatch: any; history: any }) {
			// 初始化查询用户是否登陆，app.start阶段执行
			dispatch({ type: 'queryUserLogin', payload: { history } })
		}
	},
	reducers: {
		changeCollapse: (state: any, { payload }: { payload: any }) => ({
			...state,
			...payload
		})
	},
	effects: {
		*queryUserLogin(
			{ payload }: { payload: any },
			{ put, call }: { put: any; call: any }
		) {
			const {
				history,
				history: {
					location: { pathname }
				}
			} = payload
			if (
				pathname !== '/users/login' &&
				pathname !== '/users/forgetPassword'
			) {
				if (
					!sessionStorage.getItem('userProfile') ||
					!sessionStorage.getItem('token') ||
					!sessionStorage.getItem('routeList')
				) {
					console.log('路由守卫')
					history.replace('/users/login')
				} else {
					// 用户满足条件，进行登录信息的检测
					/* 

					*/
				}
			} else {
				// 不需要进行拦截
				sessionStorage.clear()
			}
		}
	}
}
