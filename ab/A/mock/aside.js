let asidelist={
    status:200,
    message:'success',
    data:[
        {
            "id":1,
            "path":"/students",
            "title":"学员管理",
            "name":"学员管理",
            "icon":"el-icon-trophy-1"
        },
        {
            "id":2,
            "path":"/teacher",
            "title":"讲师管理",
            "name":"讲师管理",
            "icon":"el-icon-medal-1"
        },
        {
            "id":3,
            "path":"/assistent",
            "title":"助教管理",
            "name":"助教管理",
            "icon":"el-icon-s-custom"
        }
    ]
}

export default{
    'get|/params/aside':(option)=>{
        return {
            status:200,
            message:'success',
            data:asidelist
        }
    }
}