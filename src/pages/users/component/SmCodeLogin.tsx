import React from 'react'
import IconMap from '@/components/IconMap'
import { Button } from "antd"

interface SmCodeLoginInt {
	FormItem: any,
	Input: any
}
const SmCodeLogin = ({ FormItem, Input }: SmCodeLoginInt) => {
	return (
		<>
			<FormItem>
				<Input placeholder="请输入手机号" prefix={IconMap.mobileIcon}></Input>
			</FormItem>
			<FormItem>
				<Input placeholder="请输入验证码" prefix={IconMap.codeIcon}
					addonAfter={<Button>发送验证码</Button>}
				></Input>
			</FormItem>
		</>
	)
}

export default SmCodeLogin