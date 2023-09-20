// import $http from 'api'

export default {
	namespace: 'attendance',
	state: {
		tableList: [
			{
				title: '迟到详情',
				renderList: [
					{
						department: {
							_id: '1',
							departmentName: '测试部门'
						},
						_id: '1',
						userName: '张小龙',
						createTime: '2021-08-09T00:00:00.000+00:00',
						attendanceType: 4
					}
				]
			},
			{
				title: '早退详情',
				renderList: [
					{
						department: {
							_id: '2',
							departmentName: '技术部门'
						},
						_id: '2',
						userName: '马云',
						createTime: '2021-08-09T00:00:00.000+00:00',
						attendanceType: 3
					}
				]
			}
		],
		chartList: [
			{
				title: '迟到员工数量',
				renderList: {
					xData: [
						'2021-08-09T00:00:00.000+00:00',
						'2021-08-10T00:00:00.000+00:00',
						'2021-08-19T00:20:00.000+00:00',
						'2021-08-25T00:02:00.000+00:00',
						'2021-09-09T00:00:00.000+00:00',
						'2021-08-25T00:02:00.000+00:00'
					],
					yData: [1, 1, 1, 1, 1, 1]
				}
			},
			{
				title: '早退员工数量',
				renderList: {
					xData: [
						'2021-08-09T00:00:00.000+00:00',
						'2021-08-10T00:00:00.000+00:00',
						'2021-08-19T00:20:00.000+00:00',
						'2021-08-25T00:02:00.000+00:00',
						'2021-09-09T00:00:00.000+00:00',
						'2021-08-25T00:02:00.000+00:00'
					],
					yData: [1, 1, 1, 2, 1, 3]
				}
			}
		]
	}
	// reducers: {
	// 	formatData(state, { payload }) {}
	// },
	// effects: {
	// 	*initAttendanceList({}, { put, call }) {
	// 		// const { data } = yield call($http.getAttendanceList)
	// 	}
	// }
}
