import React from 'react'
import ReactEChart from 'echarts-for-react'
import { formatDate } from '@/utils/format'
const ViolationChart = ({
	title,
	renderList
}: {
	title: string
	renderList: any
}) => {
	const option = {
		title: { text: title },
		tooltip: { trigger: 'axis' },
		yAxis: [{ type: 'value', minInterval: 1 }],
		xAxis: [
			{
				type: 'category',
				data: renderList.xData.map((item: any) => formatDate(item))
			}
		],
		dataZoom: [
			{
				type: 'slider',
				show: true,
				xAxisIndex: [0],
				left: '9%',
				bottom: 0,
				start: 40,
				end: 100
			}
		],
		series: [
			{
				name: title,
				type: 'bar',
				data: renderList.yData,
				label: {
					show: true,
					precision: 1,
					position: 'top',
					valueAnimation: true
				}
			}
		]
	}
	return (
		<div className="block-container">
			<ReactEChart
				className="react_for_echarts"
				style={{ width: '100%', height: '400px' }}
				option={option}
			></ReactEChart>
		</div>
	)
}

export default ViolationChart
