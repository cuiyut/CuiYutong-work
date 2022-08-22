let asidelist = {
    status:200,
    message:'success',
    data:[
        {
            "id": 0,
            "icon": "el-icon-c-scale-to-original",
            "title": "图书管理",
            "path":'/book'
        },
        {
            "id": 1,
            "icon": "el-icon-edit-outline",
            "title": "后台管理",
            "path":'/hou'
        },
        {
            "id": 2,
            "icon": "el-icon-ship",
            "title": "国际化",
            "path":'/guo'
        },
        {
            "id": 3,
            "icon": "el-icon-s-grid",
            "title": "基础表格",
            "path":'/table'
        },
        {
            "id": 4,
            "icon": "el-icon-s-promotion",
            "title": "tab选项卡",
            "path":'/tab'
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