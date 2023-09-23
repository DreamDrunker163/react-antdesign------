import React, { useState } from 'react'
import { useSelector } from 'umi'
import { Table } from 'antd'
import { columnData } from './renderType'
const RecordTable = ({
	title,
	interfaceName,
	staffId
}: {
	title: string
	interfaceName: string
	staffId: string
}) => {
	const [source, setSource] = useState(
		useSelector((state: any) =>
			state[interfaceName].data.filter((item: any) => {
				console.log(item._id)
				return item._id === staffId
			})
		)
	)
	return (
		<Table
			columns={columnData[interfaceName as keyof typeof columnData]}
			rowKey={(columns) => columns._id}
			dataSource={source}
		></Table>
	)
}

export default RecordTable
