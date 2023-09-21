export default {
	namespace: 'staff',
	state: {
		staffList: [
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' },
			{ identity: 0, _id: 0, userName: '小明', accountName: 'xiaoming' }
		],
		staffTotal: 23,
		staffDetail: null
	},
	reducers: {
		saveStaffList: (state, { payload }) => ({ ...state, ...payload }),
		saveStaffTotal: (state, { payload }) => ({ ...state, ...payload }),
		saveStaffDetail: (state, { payload }) => ({ ...state, payload })
	}
}
