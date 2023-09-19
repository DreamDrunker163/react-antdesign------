import React from 'react'
import ReactECharts from 'echarts-for-react'

const Pie = ({
	title,
	renderList,
	styleData
}: {
	title: string
	renderList: any
	styleData: any
}) => {
	const option = {
		title: {
			text: title,
			left: 'left'
		},
		tooltip: {
			trigger: 'item'
		},
		series: {
			name: title,
			type: 'pie',
			radius: '50%',
			center: ['55%', '55%'],
			data: renderList,
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
				normal: {
					label: {
						show: true,
						formatter: '{b}:{d}%'
					},
					labelLine: { show: true }
				}
			}
		}
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

export default Pie
