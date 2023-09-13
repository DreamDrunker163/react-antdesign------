export const loginRule = {
	userRule: [{
		required: true, message: "账号不能为空!"
	}, {
		max: 16, message: "账户名长度不可大于16!"
	}, {
		min: 4, message: "账户名长度不可小于4!"
	}],
	passwordRule: [{
		required: true, message: "密码不能为空!"
	}],
	mobileRule: [{
		validator: (_rule: any, val: string) => {9
			const mobileReg = /^1[3|4|5|6|7|8][0-]\d{8}$/
			switch (true) {
				case !Boolean(val):
					return Promise.reject("手机号码不能为空!")
				case !mobileReg.test(val):
					return Promise.reject('手机号格式不正确!')
				default:
					return Promise.resolve()
			}
		}
	}],
	codeRule: [{
		required: true, message: "验证码不能为空!"
	}, {
		max: 6, message: "验证码长度不对!"
	}, {
		min: 6, message: "验证码长度不对!"
	}]
}