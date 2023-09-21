import React, { useState } from 'react'
import { Table } from 'antd'
import { ColumnTypes, EditableCell, EditableRow } from '@/components/Editable'
import Columns from './Column'
import { useSelector } from 'umi'
import Dialog from '@/components/Dialog'
import RecordTable from './RecordTable'

const TableList = ({ staffList, page }: { staffList: any; page: number }) => {
	interface iCurrentRecord {
		title: string
		interfaceName: string
		staffId: string
	}
	const [currentRecord, setCurrentRecord] = useState<iCurrentRecord | null>(
		null
	)
	const [dialogStatus, setDialogStatus] = useState(false)
	const dataSource = staffList.slice((page - 1) * 10, page * 10)

	const handleDelete = () => {}

	const components = {
		body: {
			row: EditableRow,
			cell: EditableCell
		}
	}
	const assessmentData = useSelector((state: any) => state.assessment)
	const openReviewRecord = (record: iCurrentRecord) => {
		setCurrentRecord(record)
		setDialogStatus(true)
	}
	return (
		<>
			<Table
				components={components}
				rowClassName={() => 'editable-row'}
				bordered
				dataSource={dataSource}
				columns={
					Columns({
						dataSource,
						handleDelete,
						openReviewRecord
					}) as ColumnTypes
				}
				pagination={false}
				scroll={{ x: true }}
				rowKey={(record: any) => record.idNumber}
			></Table>
			<Dialog
				title={currentRecord ? currentRecord.title : ''}
				render={() => <RecordTable {...currentRecord!}></RecordTable>}
				dialogStatus={dialogStatus}
				setDialogStatus={setDialogStatus}
			></Dialog>
		</>
	)
}

export default TableList
