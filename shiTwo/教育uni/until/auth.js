import Cookies from 'js-cookie'

const TokenKey = 'token'

//获取token的方法
export function getToken() {
	return Cookies.get(TokenKey)
}

//设置token
function setToken(token) {
	Cookies.set(TokenKey, token)
}

//删除token
function removeToken() {
	Cookies.remove(TokenKey)
}

//导出方法
export { setToken, removeToken }
