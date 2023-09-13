import React from 'react'
import { useState } from "react"
import IconMap from '@/components/IconMap'
import { Button } from "antd"
import { loginRule } from "@/utils/rules"

interface SmCodeLoginInt {
	FormItem: any,
	Input: any,
	form: any
}
const SmCodeLogin = ({ FormItem, Input, form }: SmCodeLoginInt) => {
	const [disabled, setDisabled] = useState(true)
	const [currentTime, setCurrentTime] = useState(60)
	const [currentStatus, setCurrentStatus] = useState(true)

	const checkMobile = async () => {
		try {
			const data = await form.validateFields(['mobileNumber'])
			console.log(data)
			setDisabled(false)
		} catch (err) {
			console.error(err)
			setDisabled(true)
		}
	}

	const _sendSmCode = async () => {
		if (!disabled) {
			setDisabled(true)
			setCurrentStatus(false)

			// 等待runTime函数执行完setInterval后再执行下面的代码
			await runTime()

			setDisabled(false)
			setCurrentStatus(true)
			setCurrentTime(60)
		}
	}

	const runTime = () => {
		return new Promise(() => {
			const timer = setInterval(() => {
				if (currentTime <= 0) {
					clearInterval(timer)
				}
				// setCurrentTime不生效
				setCurrentTime(currentTime - 1)
				console.log(currentTime)
			}, 1000)
		})
	}

	return (
		<>
			<FormItem name="mobileNumber" rules={loginRule.mobileRule} hasFeedback>
				<Input placeholder="请输入手机号" prefix={IconMap.mobileIcon}
					onChange={checkMobile}
				></Input>
			</FormItem>
			<FormItem name="code" rules={loginRule.codeRule} hasFeedback>
				<Input placeholder="请输入验证码" prefix={IconMap.codeIcon}
					addonAfter={<Button disabled={disabled} onClick={_sendSmCode}>{
						currentStatus ? "发送验证码" : `${currentTime}秒后重新发送`
					}</Button>}
				></Input>
			</FormItem>
		</>
	)
}

export default SmCodeLogin