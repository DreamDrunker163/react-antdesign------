import React from 'react'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout
import './BaseLayout.less'

import SiderBar from '@/components/SiderBar'

const BaseLayout = ({ children }: { children: any }) => {
	// 不明白children到底怎么用
	return (
		<>
			<Layout className={'container'}>
				<SiderBar Sider={Sider} Menu={Menu}></SiderBar>
				<Layout>
					<Header>Header</Header>
					<Content>{children}</Content>
				</Layout>
			</Layout>
		</>
	)
}

export default BaseLayout
