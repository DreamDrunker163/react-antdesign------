import { Popconfirm, Tag, Image } from 'antd'
import type { DataType, ColumnTypes } from '@/components/Editable'
import { mapData } from '@/utils/mapData'
import { formatBirthday, formatYear } from '@/utils/format'
import loadErrorImg from '@/common/img/load_error.png'
import { useSelector } from 'umi'

const Columns = ({
	dataSource,
	handleAdd,
	handleDelete,
	handleSave,
	openReviewRecord
}: {
	dataSource: any
	handleAdd?: Function
	handleDelete: Function
	handleSave?: Function
	openReviewRecord: Function
}) => {
	const defaultColumns: (ColumnTypes[number] & {
		editable?: boolean
		dataIndex: string
	})[] = [
		{
			title: '姓名',
			dataIndex: 'userName',
			editable: true
		},
		{
			title: '联系电话',
			dataIndex: 'mobile',
			editable: true
		},
		{
			title: '职级描述',
			dataIndex: 'level',
			render: (level) => level?.levelDescription || '暂无职级描述'
		},
		{
			title: '性别',
			dataIndex: 'gender',
			render: (gender) => (
				<Tag>
					{gender !== undefined
						? mapData.gender[gender]
						: '暂无性别信息'}
				</Tag>
			)
		},
		{
			title: '部门',
			dataIndex: 'department',
			render: (department) => department?.departmentName || '暂无部门信息'
		},
		{
			title: '部门负责人',
			dataIndex: 'department',
			render: (department) =>
				department?.departmentLeader?.userName || '暂无负责人信息'
		},
		{
			title: '年龄',
			dataIndex: 'idNumber',
			render: (idNumber) =>
				idNumber !== undefined ? formatYear(idNumber) : '暂无年龄信息'
		},
		{
			title: '头像',
			dataIndex: 'avatar',
			render: (avatar) => {
				return (
					<Image
						src={avatar || 'error'}
						fallback={loadErrorImg}
						width={30}
						height={30}
					></Image>
				)
			}
		},
		{
			title: '籍贯',
			dataIndex: 'homeTown',
			editable: true,
			render: (homeTown: string) => (homeTown ? homeTown : '暂无籍贯信息')
		},
		{
			title: 'id',
			dataIndex: 'idNumber'
		},
		{
			title: '账户名',
			dataIndex: 'accountName'
		},
		{
			title: '学历',
			dataIndex: 'education',
			editable: true,
			render: (education: number) => mapData.education[education]
		},
		{
			title: '婚姻状况',
			dataIndex: 'marriage',
			render: (type: number) => mapData.marriage[type]
		},
		{
			title: '生日',
			dataIndex: 'idNumber',
			render: (id: string) => formatBirthday(id)
		},
		{
			title: '银行卡',
			dataIndex: 'bankNumber',
			editable: true
		},
		{
			title: '身份证号',
			dataIndex: 'idNumber',
			editable: true
		},
		{
			title: '毕业院校',
			dataIndex: 'graduatedSchool',
			editable: true
		},
		{
			title: '绩效考核',
			dataIndex: 'assessment',
			render: (record: any, row: any) => {
				return (
					<Tag
						className="c-p"
						onClick={() =>
							openReviewRecord({
								title: '绩效考核',
								interfaceName: 'assessment',
								staffId: row.idNumber
							})
						}
					>
						查看
					</Tag>
				)
			}
		},
		{
			title: '奖惩记录',
			dataIndex: 'assessment',
			render: (record, row) => {
				const getCurrentTableList = () => {
					console.log(record, row)
				}
				return (
					<Tag className="c-p" onClick={getCurrentTableList}>
						查看
					</Tag>
				)
			}
		},
		{
			title: '调薪记录',
			dataIndex: 'assessment',
			render: (record, row) => {
				const getCurrentTableList = () => {
					console.log(record, row)
				}
				return (
					<Tag className="c-p" onClick={getCurrentTableList}>
						查看
					</Tag>
				)
			}
		},
		{
			title: 'operation',
			dataIndex: 'operation',
			render: (_, record: any) =>
				dataSource.length >= 1 ? (
					<Popconfirm
						title="Sure to delete?"
						onConfirm={() => handleDelete(record.key)}
					>
						<a>Delete</a>
					</Popconfirm>
				) : null
		}
	]

	const columns = defaultColumns.map((col) => {
		if (!col.editable) {
			return col
		}
		return {
			...col,
			onCell: (record: DataType) => ({
				record,
				editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				handleSave
			})
		}
	})
	return columns
}
export default Columns
