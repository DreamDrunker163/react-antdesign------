import SearchContainer from '@/components/SearchContainer'
import TableHeader from '@/components/TableHeader'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'umi'
import FilterForm from './component/FilterForm'
import TableList from './component/TableList'

const staff = () => {
	const [page, setPage] = useState(1)
	const { staffTotal, staffList } = useSelector((state: any) => state.staff)

	const changeCurrentPage = (page: number) => {
		setPage(page)
	}
	const interfaceDelMethod = () => {}
	return (
		<div className="main-content">
			{/* 公共的表格表格头部组件 */}
			<TableHeader
				page={page}
				total={staffTotal}
				size={10}
				changeCurrentPage={changeCurrentPage}
				interfaceDelMethod={interfaceDelMethod}
			></TableHeader>
			{/* 左侧搜索区域 */}
			<SearchContainer render={() => <FilterForm />}></SearchContainer>
			{/* 表格展示区域 */}
			<TableList staffList={staffList} page={page}></TableList>
		</div>
	)
}

export default staff
