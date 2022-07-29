var ul = document.getElementsByTagName('ul')[0];
var list = [
    {
        sex: 0,
        name: '小高',
        id: 1
    },
    {
        sex: 1,
        name: '狗蛋',
        id: 2
    },
    {
        sex: 0,
        name: '高天骄',
        id: 3
    },
    {
        sex: 1,
        name: '狗三',
        id: 4
    },
    {
        sex: 0,
        name: '小红',
        id: 5
    },
    {
        sex: 0,
        name: '李沛沛',
        id: 6
    },
    {
        sex: 1,
        name: '李博',
        id: 7
    },
    {
        sex: 0,
        name: '李娅',
        id: 8
    },
    {
        sex: 1,
        name: '大哥',
        id: 9
    },
    {
        sex: 0,
        name: '张嘉宁',
        id: 10
    },
    {
        sex: 1,
        name: '李四',
        id: 11
    },
    {
        sex: 0,
        name: '小崔',
        id: 12
    },
    {
        sex: 1,
        name: '孟狗',
        id: 13
    },
    {
        sex: 0,
        name: '铁柱',
        id: 14
    },
    {
        sex: 1,
        name: '老牛',
        id: 15
    },
    {
        sex: 0,
        name: '刘五',
        id: 16
    },
    {
        sex: 0,
        name: '娟姐',
        id: 17
    },
    {
        sex: 0,
        name: '王七',
        id: 18
    }
];
var list1 = list;
/**
 * 四个按钮
 */
var button1 = document.getElementsByTagName('button')[0];
var button2 = document.getElementsByTagName('button')[1];
var button3 = document.getElementsByTagName('button')[2];
var button4 = document.getElementsByTagName('button')[3];
/**
 * 渲染数据
 */
function load() {
    ul.innerHTML = '';
    list1.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = "\n        <span>".concat(item.name, "</span>\n        ");
        ul.appendChild(li);
    });
}
load();
/**
 * 随机数据
 */
var xuan = document.getElementById('xuan');
function one() {
    var sj = Number(Math.floor(Math.random() * list1.length));
    var yiw = list1[sj];
    xuan.innerHTML = yiw.name;
}
function two() {
    var yiw = list1[Math.floor(Math.random() * list1.length)];
    var erw = list1[Math.floor(Math.random() * list1.length)];
    xuan.innerHTML = "".concat(yiw.name, ",").concat(erw.name);
}
function gril() {
    var nv = [];
    list1.forEach(function (item) {
        if (item.sex == 0) {
            nv.push(item);
            var sj = Number(Math.floor(Math.random() * nv.length));
            var nvs = nv[sj];
            xuan.innerHTML = nvs.name;
        }
    });
}
function boy() {
    var nan = [];
    list1.forEach(function (item) {
        if (item.sex == 1) {
            nan.push(item);
            var sj = Number(Math.floor(Math.random() * nan.length));
            var nans = nan[sj];
            xuan.innerHTML = nans.name;
        }
    });
}
var time = document.getElementById('time');
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
    var current = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    time.innerHTML = current;
}
setInterval("showTime()", 1000);
