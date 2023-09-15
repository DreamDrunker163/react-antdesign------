import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout
import './BaseLayout.less'

import SiderBar from '@/components/SiderBar'
import CommonHeader from '@/components/CommonHeader'

// 不明白children到底怎么用
const BaseLayout = ({ children }: { children: any }) => {
	const [collapse, setcollapse] = useState(false)

	const changeCollapse = () => {
		setcollapse(!collapse)
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
					<Content>{children}</Content>
				</Layout>
			</Layout>
		</>
	)
}

export default BaseLayout
