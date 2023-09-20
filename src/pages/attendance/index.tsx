import React, { useEffect } from 'react'
import { useDispatch } from 'umi'
import ViolationChart from './component/ViolationChart'
import ViolationTable from './component/ViolationTable'
import { useSelector } from 'umi'
import './css/index.less'

const attendance = () => {
	const { tableList, chartList } = useSelector(
		(state: any) => state.attendance
	)
	const userInfo = JSON.parse(sessionStorage.getItem('userProfile') || '')
	return (
		<div className="attendance-container">
			{userInfo.identify === 1 && (
				<div className="list-container">
					{chartList.map((item: any, index: number) => (
						<ViolationChart {...item} key={index}></ViolationChart>
					))}
				</div>
			)}
			{
				<div
					className="list-container"
					style={{
						width: userInfo.identify === 1 ? '49.8%' : '100%'
					}}
				>
					{tableList.map((item: any, index: number) => (
						<ViolationTable {...item} key={index}></ViolationTable>
					))}
				</div>
			}
		</div>
	)
}

export default attendance
