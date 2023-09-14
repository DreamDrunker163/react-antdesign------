import React, { useEffect } from 'react'
import { useState } from 'react'
import IconMap from '@/components/IconMap'
import { Button } from 'antd'
import { loginRule } from '@/utils/rules'

interface SmCodeLoginInt {
	FormItem: any
	Input: any
	form: any
}
const SmCodeLogin = ({ FormItem, Input, form }: SmCodeLoginInt) => {
	const [disabled, setDisabled] = useState(true)
	const [currentStatus, setCurrentStatus] = useState(true)
	const [currentTime, setCurrentTime] = useState(60)

	const checkMobile = async () => {
		try {
			const data = await form.validateFields(['mobileNumber'])
			setDisabled(false)
		} catch (err) {
			setDisabled(true)
		}
	}

	const _sendSmCode = async () => {
		if (!disabled) {
			setDisabled(true)
			setCurrentStatus(false)

			// 等待runTime函数执行完setInterval后再执行下面的代码
			await runTime(currentTime)

			setDisabled(false)
			setCurrentStatus(true)
			setCurrentTime(60)
		}
	}

	const runTime = (time: number) => {
		// promise 必须要resolve或者reject
		// 解决方法：传入一个变量代替currentTime。
		return new Promise<void>((resolve) => {
			const timer = setInterval(() => {
				if (time <= 0) {
					clearInterval(timer)
					resolve()
				}
				// 不知道为什么，在本函数内部使用setCurrentTime，外界能够立刻改变currentTime的值，
				// 但此函数内currentTime一直不改变
				setCurrentTime(() => --time)
			}, 1000)
		})
	}

	return (
		<>
			<FormItem
				name="mobileNumber"
				rules={loginRule.mobileRule}
				hasFeedback
			>
				<Input
					placeholder="请输入手机号"
					prefix={IconMap.mobileIcon}
					onChange={checkMobile}
				></Input>
			</FormItem>
			<FormItem name="code" rules={loginRule.codeRule} hasFeedback>
				<Input
					placeholder="请输入验证码"
					prefix={IconMap.codeIcon}
					addonAfter={
						<Button disabled={disabled} onClick={_sendSmCode}>
							{currentStatus
								? '发送验证码'
								: `${currentTime}秒后重新发送`}
						</Button>
					}
				></Input>
			</FormItem>
		</>
	)
}

export default SmCodeLogin
