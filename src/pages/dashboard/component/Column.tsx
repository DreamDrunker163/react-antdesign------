import React from 'react'
import ReactECharts from 'echarts-for-react'

const Column = ({
	title,
	renderList,
	styleData,
	br = false
}: {
	title: string
	renderList: any
	styleData: any
	br: boolean
}) => {
	console.log('renderList: ', renderList)
	const option = {
		title: { text: title },
		tooltip: {
			trigger: 'axis'
		},
		yAxis: [{ type: 'value', minInterval: 1 }], // 展示整数
		xAxis: [
			{
				type: 'category',
				data: renderList.xData,
				axisLabel: {
					interval: 0,
					formatter: (value: any) =>
						br ? value.split('').join('\n') : value
				}
			}
		],
		series: [
			{
				name: '人数',
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
		<div className="staff-amount-container" style={{ ...styleData }}>
			<ReactECharts
				className="react_for_echarts"
				option={option}
			></ReactECharts>
		</div>
	)
}

export default Column
