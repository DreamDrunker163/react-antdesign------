import React from 'react'

const index = (props: any) => {
	return (
		<div>
			user page
			<p>我是传递来的id：{props.match.params.id}</p>
		</div>
	)
}

export default index