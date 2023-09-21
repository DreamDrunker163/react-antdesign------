export const columnData = {
	assessment: [
		{
			title: '员工姓名',
			dataIndex: 'staffName',
			render: (data: any) => data.userName
		},
		{
			title: '考核等级',
			dataIndex: 'result'
		},
		{
			title: '调整职级',
			dataIndex: 'currentLevel',
			render: (data: any) => data.levelName
		}
	]
}
