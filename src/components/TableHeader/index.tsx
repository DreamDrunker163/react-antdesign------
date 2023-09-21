import React from 'react'
import { Button, Pagination } from 'antd'
import IconMap from '@/components/IconMap'
import classNames from 'classNames'

import './index.less'
import { useSelector } from 'umi'
const TableHeader = ({
	page,
	size,
	total,
	changeCurrentPage,
	interfaceDelMethod
}: {
	page: number
	size: number
	total: number
	changeCurrentPage: Function
	interfaceDelMethod: Function
}) => {
	const { collapse } = useSelector((state: any) => state.common)
	return (
		<div
			className={classNames('table-header-container', {
				'big-style': collapse
			})}
		>
			<div>
				<Button
					className="mr-10"
					size="small"
					shape="round"
					icon={IconMap.add}
				>
					创建
				</Button>
				<Button danger size="small" shape="round" icon={IconMap.delete}>
					批量删除
				</Button>
			</div>
			<div className="pagination-container">
				<Pagination
					simple
					defaultCurrent={page}
					current={page}
					pageSize={size}
					total={total}
					onChange={(page) => changeCurrentPage(page)}
				></Pagination>
				<span>共计{total}条记录</span>
			</div>
		</div>
	)
}
export default TableHeader
