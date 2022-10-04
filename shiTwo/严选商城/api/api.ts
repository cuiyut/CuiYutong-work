//引入 http
import http from '@/request/http.js'
import * as TS from '@/api/define'

/**首页轮播图*/
const getBanner: () => Promise<TS.BannerItem[]> = () => { 
	return http({
		url: 'home/swiperdata'
	})
}
/**首页导航栏*/
const getHomeCate: () => Promise<TS.HomeCateListItme[]>  = () => {
	return http({
		url: 'home/catitems'
	})
}
/**首页楼层数据*/
const getFloorData: () => Promise<TS.floorDataItem[]>  = () => {
	return http({
		url: 'home/floordata'
	})
}


export {
	getBanner,
	getHomeCate,
	getFloorData
}