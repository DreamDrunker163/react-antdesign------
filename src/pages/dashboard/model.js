// import $http from 'api'
export default {
	namespace: 'dashboard',
	state: {
		amountDataList: [
			{
				title: '总人数',
				amount: 17,
				styleData: { width: '100%', heght: '170px' }
			},
			{
				title: '入职一年内员工',
				amount: 13,
				styleData: { width: '33%', heght: '170px' }
			},
			{
				title: '入职一到两年内员工',
				amount: 0,
				styleData: { width: '33%', heght: '170px' }
			},
			{
				title: '入职三年以上员工',
				amount: 4,
				styleData: { width: '33%', heght: '170px' }
			}
		],
		staffData: {
			title: '工龄最老的十个人',
			renderList: [
				{
					userName: '小坏蛋',
					department: '研发部'
				},
				{
					userName: '管理员',
					department: '大客户部'
				},
				{
					userName: '卢嘉良',
					department: '运营部'
				},
				{
					userName: '马云'
				},
				{
					userName: '韩刚',
					department: '研发部'
				},
				{
					userName: '韩非子',
					department: '商务部'
				},
				{
					userName: '韩非子1',
					department: '技术部'
				},
				{
					userName: '安安',
					department: '技术部'
				},
				{
					userName: '张三',
					department: '客服部'
				},
				{
					userName: '王麻子',
					department: '技术部'
				}
			],
			styleData: {
				width: '49.8%',
				height: '350px'
			}
		},
		pieList: [
			{
				title: '学历情况',
				renderList: [
					{
						name: '无学历',
						value: 0
					},
					{
						name: '中专',
						value: 1
					},
					{
						name: '大专',
						value: 5
					},
					{
						name: '本科',
						value: 11
					},
					{
						name: '研究生',
						value: 0
					},
					{
						name: '博士生',
						value: 0
					}
				],
				styleData: {
					width: '49.8%',
					height: '350px'
				}
			},
			{
				title: '性别占比',
				renderList: [
					{
						name: '男',
						value: 11
					},
					{
						name: '女',
						value: 6
					}
				],
				styleData: {
					width: '49.8%',
					height: '350px'
				}
			}
		],
		columnList: [
			{
				title: '员工年龄段',
				renderList: [{}],
				styleData: {
					width: '49.8%',
					height: '350px'
				}
			},
			{
				title: '部门员工数量',
				renderList: {},
				styleData: {
					width: '49.8%',
					height: '350px'
				}
			}
		],
		marrigeData: {
			title: '员工婚姻状况',
			renderList: {},
			styleData: {
				width: '49.8%',
				height: '350px'
			}
		},
		constellationData: {
			title: '员工星座分布',
			renderList: {},
			styleData: {
				width: '49.8%',
				height: '350px'
			}
		}
	}
}
