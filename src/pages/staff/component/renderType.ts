import { Tag } from 'antd'
import { mapData } from '@/utils/mapData'
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
		},
		{
			title: '对应职级分数',
			dataIndex: 'standardScore'
		},
		{
			title: '考核得分',
			dataIndex: 'assessmentScore'
		}
	],
	rewardAndPunishment: [
		{
			title: '员工姓名',
			dataIndex: 'staffName',
			render: (data: any) => data.userName
		},
		{
			title: '奖惩类型',
			dataIndex: 'type',
			render: (data: any) => {
				// return mapData.rewardAndPunishment[data as typeof keyof mapData]
			}
		}
	],
	salary: [
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
		},
		{
			title: '对应职级分数',
			dataIndex: 'standardScore'
		},
		{
			title: '考核得分',
			dataIndex: 'assessmentScore'
		}
	]
}
