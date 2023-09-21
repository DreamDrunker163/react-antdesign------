import React from 'react'
import { Modal } from 'antd'

const Dialog = ({
	title,
	render,
	width = 600,
	dialogStatus,
	setDialogStatus
}: {
	title: string
	render: Function
	width?: number
	dialogStatus: boolean
	setDialogStatus: Function
}) => {
	return (
		<Modal
			width={width}
			destroyOnClose={true}
			centered={true}
			title={title}
			footer={null}
			open={dialogStatus}
			onCancel={() => setDialogStatus(false)}
		>
			{render()}
		</Modal>
	)
}

export default Dialog
