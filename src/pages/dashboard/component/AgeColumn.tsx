import React from 'react'
import ReactEChart from 'echarts-for-react'

const AgeColumn = ({
	title,
	renderList,
	styleData
}: {
	title: string
	renderList: any
	styleData: any
}) => {
	const option = {
		title: { text: title, left: 'left' },
		xAxis: {
			max: Math.ceil(Math.max(...renderList.map((item: any) => item.age)))
		},
		yAxis: {
			type: 'category',
			data: renderList.map((item: any) => item.name),
			inverse: true
		},
		series: {
			realtimeSort: true,
			type: 'bar',
			data: renderList.map((item: any) => item.age),
			label: {
				show: true,
				position: 'top'
			}
		}
	}
	return (
		<div className="staff-amount-container" style={{ ...styleData }}>
			<ReactEChart
				className="react_for_echarts"
				option={option}
			></ReactEChart>
		</div>
	)
}

export default AgeColumn
