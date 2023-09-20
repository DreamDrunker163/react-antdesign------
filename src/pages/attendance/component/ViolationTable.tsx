import React from 'react'
import { Table, Tag } from 'antd'
import { formatDate } from '@/utils/format'

const ViolationTable = ({
	title,
	renderList
}: {
	title: string
	renderList: any
}) => {
	const columns = [
		{
			title: '姓名',
			dataIndex: 'userName',
			render: (userName: string) => userName
		},
		{
			title: '时间',
			dataIndex: 'createTime',
			render: (createTime: any) =>
				formatDate(createTime, 'YYYY-MM-DD HH-mm-ss')
		},
		{
			title: '考勤类型',
			dataIndex: 'attendanceType',
			render: (attendanceType: number) => (
				<Tag color="red">{attendanceType === 4 ? '迟到' : '早退'}</Tag>
			)
		},
		{
			title: '部门',
			dataIndex: 'department',
			render: (x: any) => (
				<Tag>
					{x.departmentName ? x.departmentName : '暂无部门信息'}
				</Tag>
			)
		}
	]
	return (
		<div className="block-container">
			<div className="title">{title}</div>
			<Table
				dataSource={renderList}
				columns={columns}
				rowKey={(column) => column._id}
				pagination={false}
			></Table>
		</div>
	)
}

export default ViolationTable
