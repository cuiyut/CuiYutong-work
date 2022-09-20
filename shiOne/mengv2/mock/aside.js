let asidelist = {
    status:200,
    message:'success',
    data:[
        {
            "id": 0,
            "icon": "el-icon-s-home",
            "title": "首页",
            "path":'/shou'
        },
        {
            "id": 1,
            "icon": "el-icon-user-solid",
            "title": "会员管理",
            "path":'/vip'
        },
        {
            "id": 2,
            "icon": "el-icon-shopping-bag-1",
            "title": "供应商管理",
            "path":'/gong'
        },
        {
            "id": 3,
            "icon": "el-icon-goods",
            "title": "商品管理",
            "path":'/goods'
        },
        {
            "id": 4,
            "icon": "el-icon-user",
            "title": "员工管理",
            "path":'/yuan'
        }
    ]
}

export default {
    'get|/aside': (option) => {
        return {
            status:200,
            message:'success',
            data:asidelist
        }
    } 
}