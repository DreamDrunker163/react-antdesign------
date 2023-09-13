import React from 'react'
import { Link } from 'umi'
import { Button } from "antd"

const Layout = ({ children, history }: { children: any, history: any }) => {

	const goTargetPage = (url: any) => {
		history.push(url)
	}

	return (
		<div>
			<h1>全局基础模版</h1>
			<Link to="dashboard">跳转到图标界面</Link>
			<hr />
			<Button onClick={() => goTargetPage('/user/123')}>使用点击事件+historyApi的方式跳转到user界面</Button>
			<hr />
			<Button onClick={() => goTargetPage('/')}>使用点击事件+historyApi的方式跳转到首页</Button>
			{children}
		</div>
	)
}

export default Layout