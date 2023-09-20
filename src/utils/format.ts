import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import rTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(rTime)

export const formatDate = (val: string, type = 'YYYY年MM月DD日') => {
	const valNum = new Date(val).getTime()
	return dayjs(valNum).format(type)
}
