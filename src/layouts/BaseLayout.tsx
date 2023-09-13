import React from 'react'

const BaseLayout = (props: any) => {
	const { children } = props
	return (
		<div>
			<h1>头部</h1>
			<p>侧边栏</p>
			{children}
		</div>
	)
}

export default BaseLayout