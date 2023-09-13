import React from 'react'
import IconMap from "@/components/IconMap"
import { loginRule } from "@/utils/rules"

const AccountLogin = ({ Input, FormItem }: { Input: any, FormItem: any }) => {
	return (
		<>
			<FormItem name="username" rules={loginRule.userRule} hasFeedback>
				<Input placeholder="请输入用户名" prefix={IconMap.userIcon}></Input>
			</FormItem>
			<FormItem name="password" rules={loginRule.passwordRule} hasFeedback>
				<Input placeholder="请输入密码" prefix={IconMap.lockIcon} type="password"></Input>
			</FormItem>
		</>
	)
}

export default AccountLogin