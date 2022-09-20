import axios from '../until/http.js'

const http = {
	//分类左侧左侧菜单数据
	getSearch : () => axios.get('article/api/category/label/list')
}

export default http