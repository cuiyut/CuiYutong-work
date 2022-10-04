	/**轮播图数据接口*/
	interface BannerItem {
		image_src :string,
		goods_id:number,
		navigator_url:string,
		open_type:string
	}
	//导航栏数组的接口
	interface HomeCateListItme {
		name:string,
		image_src:string,
		open_type?:string,
		navigator_url?:string
	}
	
	// 楼层数据接口
	interface floorDataItem {
		floor_title:FloorTitle,
		product_list:ProductList
	}
	//楼层数据标题接口
	interface FloorTitle{
		image_src:string,
		name:string
	}
	//楼层数据图片接口
	interface ProductList{
		image_src:string,
		image_width:string,
		name:string,
		navigator_url:string,
		open_type:string
	}
	//首页data数据
	interface homeData {
		bannerList:BannerItem[],
		homeCateList:HomeCateListItme[],
		floorData:floorDataItem[]
	}
  
  // 分类

	
	
	export {
		BannerItem,
		HomeCateListItme,
		floorDataItem,
		homeData
	}