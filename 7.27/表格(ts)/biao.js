var tbody = document.getElementsByTagName('tbody')[0];
var span = document.getElementsByTagName('span')[0];
var span1 = document.getElementsByTagName('span')[1];
var arrays = [
    {
        id: 1,
        goods_name: "vivo 手机 p30",
        price: 1242
    },
    {
        id: 2,
        goods_name: "苹果手机 iphone plus",
        price: 45000
    },
    {
        id: 3,
        goods_name: "宝马 X7 4驱",
        price: 750000
    },
    {
        id: 4,
        goods_name: "宝马 5系 2驱",
        price: 450000
    },
    {
        id: 5,
        goods_name: "锤子手机 200G",
        price: 2000
    },
    {
        id: 6,
        goods_name: "华为手机 P40",
        price: 5000
    },
    {
        id: 7,
        goods_name: "红米 手机",
        price: 1200
    },
    {
        id: 8,
        goods_name: "海尔电冰箱 3匹",
        price: 980
    },
    {
        id: 9,
        goods_name: "苹果笔记本电脑 i9",
        price: 20000
    },
    {
        id: 10,
        goods_name: "精品手机 华为 200G",
        price: 3200
    }
];
var array = arrays;
var isid = true;
var ispri = true;
// 渲染
function load(arr) {
    tbody.innerHTML = '';
    arr.forEach(function (ele) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n                <td>\n                ".concat(ele.id, "\n                </td>\n                <td>\n                ").concat(ele.goods_name, "\n                </td>\n                <td>\n                ").concat(ele.price, "\n                </td>\n        ");
        tbody.appendChild(tr);
    });
    span.innerHTML = String(array.length);
    var numipt = document.getElementsByTagName('input')[1];
    var ym = Number(Math.ceil(array.length / Number(numipt.value)));
    span1.innerHTML = '';
    for (var i = 0; i < ym; i++) {
        var span_1 = document.createElement('span');
        span_1.innerHTML = "\n            <button onclick=\"go(this)\">\n            ".concat(String(i + 1), "\n            </button>\n            ");
        span1.appendChild(span_1);
    }
}
load(array);
// ID排序
function idxu(ele) {
    if (isid) {
        array.sort(function (a, b) {
            return b.id - a.id;
        });
        ele.innerHTML = '↑';
        isid = false;
    }
    else {
        array.sort(function (a, b) {
            return a.id - b.id;
        });
        ele.innerHTML = '↓';
        isid = true;
    }
    load(array);
}
// 价格排序
function prixu(ele) {
    if (ispri) {
        array.sort(function (a, b) {
            return b.price - a.price;
        });
        ele.innerHTML = '↑';
        ispri = false;
    }
    else {
        array.sort(function (a, b) {
            return a.price - b.price;
        });
        ele.innerHTML = '↓';
        ispri = true;
    }
    load(array);
}
// 搜索
function sou(ele) {
    var val = ele.value;
    var arr = array.filter(function (ele) {
        return ele.goods_name.includes(val);
    });
    load(arr);
}
