import React, { useContext, useEffect, useRef, useState } from 'react'
import type { InputRef } from 'antd'
import { Form, Input, Table } from 'antd'
import type { FormInstance } from 'antd/es/form'

export const EditableContext = React.createContext<FormInstance<any> | null>(
	null
)

export interface Item {
	key: string
	name: string
	age: string
	address: string
}

export interface EditableRowProps {
	index: number
}

export const EditableRow: React.FC<EditableRowProps> = ({
	index,
	...props
}) => {
	const [form] = Form.useForm()
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	)
}

export interface EditableCellProps {
	title: React.ReactNode
	editable: boolean
	children: React.ReactNode
	dataIndex: keyof Item
	record: Item
	handleSave: (record: Item) => void
}

export const EditableCell: React.FC<EditableCellProps> = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	handleSave,
	...restProps
}) => {
	const [editing, setEditing] = useState(false)
	const inputRef = useRef<InputRef>(null)
	const form = useContext(EditableContext)!

	useEffect(() => {
		if (editing) {
			inputRef.current!.focus()
		}
	}, [editing])

	const toggleEdit = () => {
		setEditing(!editing)
		form.setFieldsValue({ [dataIndex]: record[dataIndex] })
	}

	const save = async () => {
		try {
			const values = await form.validateFields()

			toggleEdit()
			handleSave({ ...record, ...values })
		} catch (errInfo) {
			console.log('Save failed:', errInfo)
		}
	}

	let childNode = children

	if (editable) {
		childNode = editing ? (
			<Form.Item
				style={{ margin: 0 }}
				name={dataIndex}
				rules={[
					{
						required: true,
						message: `${title} is required.`
					}
				]}
			>
				<Input ref={inputRef} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : (
			<div
				className="editable-cell-value-wrap"
				style={{ paddingRight: 24 }}
				onClick={toggleEdit}
			>
				{children}
			</div>
		)
	}

	return <td {...restProps}>{childNode}</td>
}

export type EditableTableProps = Parameters<typeof Table>[0]

export interface DataType {
	key: React.Key
	name: string
	age: string
	address: string
}

export type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>
