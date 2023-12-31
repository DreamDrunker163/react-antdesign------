import React from 'react'
import { selectLayout } from '@/utils/selectLayout'
import BaseLayout from './BaseLayout'
import LoginLayout from './LoginLayout'

const Layout = ({ children, location }: { children: any; location: any }) => {
	const layoutMap = {
		BaseLayout,
		LoginLayout
	}

	const Container = layoutMap[selectLayout(location.pathname)]

	return (
		<div>
			<Container>{children}</Container>
		</div>
	)
}

export default Layout
