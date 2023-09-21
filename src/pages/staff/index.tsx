import TableHeader from '@/components/TableHeader'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'umi'

const staff = () => {
	const [page, setPage] = useState(1)
	const { staffTotal } = useSelector((state: any) => state.staff)

	const changeCurrentPage = (page: number) => {
		setPage(page)
	}
	const interfaceDelMethod = () => {}
	return (
		<div className="main-container">
			{/* 公共的表格表格头部组件 */}
			<TableHeader
				page={page}
				total={staffTotal}
				size={10}
				changeCurrentPage={changeCurrentPage}
				interfaceDelMethod={interfaceDelMethod}
			></TableHeader>
		</div>
	)
}

export default staff
