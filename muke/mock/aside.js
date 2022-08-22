let asidelist = {
    status:200,
    message:'success',
    data:[
        {
            "id": 2,
            "icon": "el-icon-ship",
            "title": "用户",
            "children":[
                {
                    "id":20,
                    "icon": "el-icon-edit-outline",
                    "title": "员工管理",
                    "path":'/manage'
                },
                {
                    "id":21,
                    "icon": "el-icon-edit-outline",
                    "title": "角色列表",
                    "path":'/role'
                },
                {
                    "id":22,
                    "icon": "el-icon-edit-outline",
                    "title": "权限列表",
                    "path":'/permission'
                }
            ]
        },
        {
            "id": 3,
            "icon": "el-icon-s-grid",
            "title": "文章",
            "children":[
                {
                    "id":30,
                    "icon": "el-icon-edit-outline",
                    "title": "文章排名",
                    "path":'/ranking'
                },
                {
                    "id":31,
                    "icon": "el-icon-edit-outline",
                    "title": "创建文章",
                    "path":'/create'
                }
            ]
        }
    ],
    dan:[
        {
            "id": 0,
            "icon": "el-icon-c-scale-to-original",
            "title": "个人中心",
            "path":'/profile'
        },
        {
            "id": 1,
            "icon": "el-icon-edit-outline",
            "title": "数据可视化",
            "path":'/chart'
        }
    ]
}

export default {
    'get|/params/aside': (option) => {
        return {
            status:200,
            message:'success',
            data:asidelist
        }
    } 
}