import React from 'react'
import IconMap from "@/components/IconMap"

const AccountLogin = ({ Input, FormItem }: { Input: any, FormItem: any }) => {
	return (
		<>
			<FormItem>
				<Input placeholder="请输入用户名" prefix={IconMap.userIcon}></Input>
			</FormItem>
			<FormItem>
				<Input placeholder="请输入密码" prefix={IconMap.lockIcon}></Input>
			</FormItem>
		</>
	)
}

export default AccountLogin