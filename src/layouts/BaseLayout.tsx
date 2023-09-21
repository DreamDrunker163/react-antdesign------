import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout
import './BaseLayout.less'
import { history, useDispatch, useSelector } from 'umi'
import NotFoundPage from '@/pages/404Page'

import SiderBar from '@/components/SiderBar'
import CommonHeader from '@/components/CommonHeader'

// 不明白children到底怎么用
const BaseLayout = ({ children }: { children: any }) => {
	const { collapse } = useSelector((state: any) => state.common)

	const routeList =
		JSON.parse(sessionStorage.getItem('routeList') || '') || {}

	const dispatch = useDispatch()
	const changeCollapse = () => {
		dispatch({
			type: 'common/changeCollapse',
			payload: { collapse: !collapse }
		})
	}
	const { location } = history
	// 定义一个当前界面的判断函数， 第一判断当前界面是不是根域下，直接跳转到路由对象的首页面。
	// 如果当前当问的界面没有在路由表内部，直接跳转到404界面
	const isIncludePage = () => {
		if (location.pathname === '/') {
			// 路由表通过权限返回路由表的第一项内容
			history.replace(routeList[0].route)
			return true
		}
		return routeList.some((item: any) => item.route === location.pathname)
	}

	return (
		<>
			<Layout className={'container'}>
				<SiderBar
					Sider={Sider}
					Menu={Menu}
					collapse={collapse}
				></SiderBar>
				<Layout>
					<CommonHeader
						Header={Header}
						collapse={collapse}
						changeCollapse={changeCollapse}
					></CommonHeader>
					<Content>
						{isIncludePage() ? children : <NotFoundPage />}
					</Content>
				</Layout>
			</Layout>
		</>
	)
}

export default BaseLayout
