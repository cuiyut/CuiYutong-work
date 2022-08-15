let ul:HTMLUListElement = document.getElementsByTagName('ul')[0]


let list = [
    {
        sex:0,
        name:'小高',
        id:1
    },
    {
        sex:1,
        name:'狗蛋',
        id:2
    },
    {
        sex:0,
        name:'高天骄',
        id:3
    },
    {
        sex:1,
        name:'狗三',
        id:4
    },
    {
        sex:0,
        name:'小红',
        id:5
    },
    {
        sex:0,
        name:'李沛沛',
        id:6
    },
    {
        sex:1,
        name:'李博',
        id:7
    },
    {
        sex:0,
        name:'李娅',
        id:8
    },
    {
        sex:1,
        name:'大哥',
        id:9
    },
    {
        sex:0,
        name:'张嘉宁',
        id:10
    },
    {
        sex:1,
        name:'李四',
        id:11
    },
    {
        sex:0,
        name:'小崔',
        id:12
    },
    {
        sex:1,
        name:'孟狗',
        id:13
    },
    {
        sex:0,
        name:'铁柱',
        id:14
    },
    {
        sex:1,
        name:'老牛',
        id:15
    },
    {
        sex:0,
        name:'刘五',
        id:16
    },
    {
        sex:0,
        name:'娟姐',
        id:17
    },
    {
        sex:0,
        name:'王七',
        id:18
    }
]




/**
 * 类型
 */
interface arr {
    sex:number,   
    name:string,  
    id:number     
}


const list1:Array<arr> = list

/**
 * 四个按钮
 */
let button1:HTMLButtonElement = document.getElementsByTagName('button')[0]
let button2:HTMLButtonElement = document.getElementsByTagName('button')[1]
let button3:HTMLButtonElement = document.getElementsByTagName('button')[2]
let button4:HTMLButtonElement = document.getElementsByTagName('button')[3]

/**
 * 渲染数据
 */
function load():void{
    ul.innerHTML='' 
    list1.forEach(item=>{  
        let li = document.createElement('li')  
        li.innerHTML=`
        <span>${item.name}</span>
        `
        ul.appendChild(li)  
    })
}
load()



/**
 * 随机数据
 */
let xuan:HTMLSpanElement = document.getElementById('xuan')
function one(){
    var sj = Number(Math.floor(Math.random()*list1.length))
    var yiw = list1[sj]
    xuan.innerHTML = yiw.name
}
function two(){
    var yiw = list1[Math.floor(Math.random()*list1.length)]
    var erw = list1[Math.floor(Math.random()*list1.length)]
    xuan.innerHTML=`${yiw.name},${erw.name}`
}
function gril(){
    let nv = []
    list1.forEach(item=>{
        if(item.sex == 0){
            nv.push(item)
            var sj = Number(Math.floor(Math.random()*nv.length))
            var nvs = nv[sj]
            xuan.innerHTML = nvs.name
        }
    })
}

function boy(){
    let nan = []
    list1.forEach(item=>{
        if(item.sex == 1){
            nan.push(item)
            var sj = Number(Math.floor(Math.random()*nan.length))
            var nans = nan[sj]
            xuan.innerHTML = nans.name
        }
    })
}


let time:HTMLSpanElement = document.getElementById('time')
function showTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; 
    var day = date.getDate();  
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // @ts-ignore
    second = second < 10 ? "0" + second : second;
    var current = year + "-" + month + "-" + day +  " " + hour + ":" + minute + ":" + second;
    time.innerHTML = current;
}
setInterval("showTime()", 1000);