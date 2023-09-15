import React from 'react'

import iconMap from '@/components/IconMap'
import defaultAvatarIcon from '@/common/img/avatar.png'

import { Avatar, Menu } from 'antd'

import { useSelector } from 'umi'

interface iCommonHeader {
	Header: any
	collapse: boolean
	changeCollapse: Function
}

const CommonHeader = ({ Header, collapse, changeCollapse }: iCommonHeader) => {
	const items = [
		{
			label: (
				<>
					<Avatar
						style={{ marginRight: '10px' }}
						src={defaultAvatarIcon}
					></Avatar>
					<span>
						{JSON.parse(sessionStorage.getItem('userProfile') || '')
							?.accountName || '加载错误'}
					</span>
				</>
			),
			key: 0,
			children: [{ label: '退出', key: 1, icon: iconMap.signOut }]
		}
	]
	return (
		<Header className="header-wrapper">
			<div className="button-container" onClick={() => changeCollapse()}>
				{!collapse ? iconMap.leftArrow : iconMap.rightArrow}
			</div>
			<Menu mode="horizontal" items={items}></Menu>
		</Header>
	)
}

export default CommonHeader
