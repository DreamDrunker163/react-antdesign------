import React, { ReactElement } from 'react'
import logo from '@/common/img/logo.png'
import { history, Link } from 'umi'
import { iRoute } from '@/types'
import iconMap from '@/components/IconMap'

interface SiderBar {
	Sider: any
	Menu: any
}

const SiderBar = ({ Sider, Menu }: SiderBar) => {
	const routeList: Array<iRoute> =
		JSON.parse(sessionStorage.getItem('routeList') || '') || []
	const pathname = history.location.pathname
	return (
		<Sider theme="light" className="side-bar">
			<div className="brand">
				<div className="logo">
					<img src={logo} alt="" />
					<h1>后台管理</h1>
				</div>
			</div>
			<div className="menu-container">
				<Menu model="inline" selectedKeys={[pathname]}>
					{routeList?.map((item: iRoute) => {
						console.log(item)
						return (
							<Menu.Item key={item.route}>
								<Link to={item.route}>
									{iconMap[item.icon as keyof typeof iconMap]}
									<span>{item.zhName}</span>
								</Link>
							</Menu.Item>
						)
					})}
				</Menu>
			</div>
		</Sider>
	)
}

export default SiderBar
