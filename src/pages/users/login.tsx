import React from 'react'
import { useState } from 'react'
import AccountLogin from './component/AccountLogin'
import SmCodeLogin from './component/SmCodeLogin'
// 使用antd的form表单相关组件
import { Form, Input, Button, Row, Col } from 'antd'
// 使用antd的图标库
import IconMap from '@/components/IconMap'
// 导入图标
import logoImg from '@/common/img/logo.png'

import './css/login.less'

const login = ({ history }: { history: any }) => {
	const [form] = Form.useForm()
	const FormItem = Form.Item
	const [type, setType] = useState(1)

	interface userInfo {
		username?: string
		password?: string
		mobileNumber?: string
		code?: string
	}

	// 当表单完成输入后的提交事件
	const submitUserInfo = ({ username, password }: userInfo) => {
		if (username === 'admin' && password === '123456') {
			sessionStorage.setItem('token', 'jfalohfas')

			sessionStorage.setItem(
				'routeList',
				JSON.stringify([
					{
						_id: '1',
						icon: 'dashboard',
						zhName: '员工分析',
						route: '/dashboard'
					},
					{
						_id: '2',
						icon: 'attendance',
						zhName: '出勤统计',
						route: '/attendance'
					},
					{ _id: '3', icon: 'team', zhName: '员工', route: '/staff' },
					{
						_id: '4',
						icon: 'department',
						zhName: '部门',
						route: '/department'
					},
					{
						_id: '5',
						icon: 'level',
						zhName: '职级',
						route: '/level'
					},
					{
						_id: '6',
						icon: 'assessment',
						zhName: '绩效考核',
						route: '/assessment'
					},
					{
						_id: '7',
						icon: 'salary',
						zhName: '调薪记录',
						route: '/salary'
					},
					{
						_id: '8',
						icon: 'rewardAndPunishment',
						zhName: '奖惩记录',
						route: '/rewardAndPunishment'
					},
					{
						_id: '9',
						icon: 'bar-chart',
						zhName: '考勤信息',
						route: '/attendanceInfo'
					}
				])
			)
			sessionStorage.setItem(
				'userProfile',
				JSON.stringify({
					accountName: 'admin',
					department: 'department',
					identify: 1,
					userName: '管理员',
					_id: '0'
				})
			)
			history.push(JSON.parse(sessionStorage['routeList'])[0].route)
		}
	}

	// 组件选择的容器函数
	const ComponentSelector = (props: any) =>
		type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />

	return (
		<div className="form">
			<div className="logo">
				<img src={logoImg} alt="" />
				<span>人事管理系统</span>
			</div>
			<Form form={form} onFinish={submitUserInfo}>
				{/* 选择当前展示的组件 */}
				{ComponentSelector({ form, FormItem, Input })}
				<Row>
					<Button
						block={true}
						type="primary"
						className="loginBtn"
						htmlType="submit"
					>
						登陆
					</Button>
				</Row>
				<Row className="ft-12">
					<Col
						span={6}
						onClick={() => history.push('/users/forgetPassword')}
					>
						忘记密码？
					</Col>
					<Col
						span={12}
						onClick={() => (type ? setType(0) : setType(1))}
					>
						{type ? '使用手机号码登陆' : '使用账户密码登陆'}{' '}
						{IconMap.arrRowRight}
					</Col>
				</Row>
			</Form>
		</div>
	)
}

export default login
