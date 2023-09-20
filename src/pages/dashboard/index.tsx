import React, { useEffect } from 'react'
import StaffAmount from './component/StaffAmount'
import OldStaffTable from './component/OldStaffTable'
import Pie from './component/Pie'
import Column from './component/Column'
import AgeColumn from './component/AgeColumn'

import { useSelector, useDispatch } from 'umi'

import './css/index.less'

const index = () => {
	const {
		amountDataList,
		staffData,
		pieList,
		columnList,
		marrigeData,
		constellationData,
		ageColumnList
	} = useSelector((state: any) => state.dashboard)
	console.log(ageColumnList)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch({ type: 'dashboard/initDashboard' })
	})
	return (
		<div className="dashboard-container">
			{/* 员工展示组件 执行四次 */}
			{amountDataList.map((item: any, index: any) => (
				<StaffAmount key={index} {...item}></StaffAmount>
			))}
			{/* 饼状图处理, 学历情况, 员工性别 */}
			{pieList.map((item: any, index: number) => {
				return <Pie {...item} key={index}></Pie>
			})}
			{/* 年龄柱状图 */}
			<AgeColumn {...ageColumnList[0]}></AgeColumn>
			{/* 员工婚姻状况 */}
			<Pie {...marrigeData}></Pie>
			{/*  */}
			{columnList.map((item: any, index: number) => (
				<Column key={index} {...item}></Column>
			))}
			{/* 最老的十个员工*/}
			<OldStaffTable {...staffData}></OldStaffTable>
			{/* 星座分布 */}
			<Pie {...constellationData}></Pie>
		</div>
	)
}

export default index
