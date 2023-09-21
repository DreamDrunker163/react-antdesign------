import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import rTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(rTime)

export const formatDate = (val: string, type = 'YYYY年MM月DD日') => {
	const valNum = new Date(val).getTime()
	return dayjs(valNum).format(type)
}
export const formatBirthday = (id: string) => {
	let birthday = ''
	if (id.length === 15) {
		birthday = '19' + id.slice(6, 14)
	} else if (id.length === 18) {
		birthday = id.slice(6, 14)
	}
	birthday = birthday.replace(/(.{4})(.{2})(.{2})/, '$1-$2-$3')
	return birthday
}
export const formatYear = (val: string, type = 'age') => {
	let year = ''
	const datenow = new Date()
	if (type === 'age') {
		year = formatBirthday(val)
	}
	return datenow.getFullYear() - Number(year.substring(0, 4))
}
