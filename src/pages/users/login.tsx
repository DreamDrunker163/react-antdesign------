import React from 'react'
import { useState } from "react"
import AccountLogin from "./component/AccountLogin"
import SmCodeLogin from './component/SmCodeLogin'
// 使用antd的form表单相关组件
import { Form, Input, Button, Row, Col } from 'antd'
// 使用antd的图标库
import IconMap from '@/components/IconMap'
// 导入图标
import logoImg from "@/common/img/logo.png"

import "./css/login.less"

const login = () => {
	const [form] = Form.useForm()
	const FormItem = Form.Item
	const [type, setType] = useState(1)

	// 当表单完成输入后的提交事件
	const submitUserInfo = (data: string) => {
		console.log(data)
	}

	// 组件选择的容器函数
	const ComponentSelector = (props: any) => type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />

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
					<Button block={true} type="primary">登陆</Button>
				</Row>
				<Row className="ft-12">
					<Col span={6}>忘记密码？</Col>
					<Col span={12} onClick={() => type ? setType(0) : setType(1)}>{type ? "使用手机号码登陆" : "使用账户密码登陆"} {IconMap.arrRowRight}</Col>
				</Row>
			</Form>
		</div>
	)
}

export default login