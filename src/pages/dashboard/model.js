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
				},
				showSidebar: true
			}
		],
		ageColumnList: [
			{
				title: '员工年龄段',
				renderList: [
					{ name: '男', age: '39' },
					{ name: '女', age: '30' }
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
				renderList: {
					xData: [22, 28, 29, 31, 32, 38, 39, 42, 51, 67],
					yData: [2, 3, 1, 1, 1, 10, 1, 1, 1, 1]
				},
				styleData: {
					width: '49.8%',
					height: '350px'
				}
			},
			{
				title: '部门员工数量',
				renderList: {
					xData: [
						'测试部门',
						'商品部',
						'大数据产品部',
						'技术研发部',
						'测试部门1',
						'新研发部',
						'销售研发部',
						'技术部',
						'测试部',
						'研发部'
					],
					yData: [0, 1, 0, 0, 0, 1, 1, 0, 1, 3]
				},
				styleData: {
					width: '49.8%',
					height: '350px'
				},
				br: true
			}
		],
		marrigeData: {
			title: '员工婚姻状况',
			renderList: [
				{
					name: '已婚',
					value: '9'
				},
				{
					name: '未婚',
					value: '8'
				}
			],
			styleData: {
				width: '49.8%',
				height: '350px'
			},
			isEmpty: true
		},
		constellationData: {
			title: '员工星座分布',
			renderList: [
				{
					name: '金牛',
					value: '11'
				},
				{
					name: '天蝎',
					value: '3'
				},
				{
					name: '水瓶',
					value: '3'
				}
			],
			styleData: {
				width: '49.8%',
				height: '350px'
			},
			isArea: true
		}
	}
}
