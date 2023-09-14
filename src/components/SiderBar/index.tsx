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
				<Menu
					model="inline"
					selectedKeys={[pathname]}
					items={routeList?.map((item: iRoute) => {
						return {
							key: item.route,
							icon: iconMap[item.icon as keyof typeof iconMap],
							label: (
								<Link to={item.route}>
									<span>{item.zhName}</span>
								</Link>
							)
						}
					})}
				></Menu>
			</div>
		</Sider>
	)
}

export default SiderBar
