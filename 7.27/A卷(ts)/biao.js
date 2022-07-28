/**
 * 思路
 * 1.设置好数据类型
 * 2.将json里面的内容引进来
 * 3.对json里面的数据进行操作
 * 4.首先是渲染，将json里面的数据在封装的渲染函数中规划好渲染在哪个位置
 *      然后通过调用这个封装来进行渲染
 * 5.编码排序，点击排序会改变图标，先设置上一个boolean标志，循环遍历json数据
 *   对它进行排序，根据标识判断是从大到小还是从小到大，点击的时候改变标识
 * 6.价格排序，和编码排序一样
 * 7.页数，获取input的数据，根据公式计算出多少页，然后根据公式计算出开始下标和结束下标
 */
var json = [
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
var tb = document.getElementsByTagName('tbody')[0];
/**
 * 渲染
 */
function load(arr) {
    tb.innerHTML = '';
    arr.forEach(function (item) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td>".concat(item.id, "</td>\n        <td>").concat(item.goods_name, "</td>\n        <td>").concat(item.price, "</td>\n        ");
        tb.appendChild(tr);
    });
    var total = document.getElementsByTagName('span')[0];
    total.innerHTML = String(arr.length);
}
load(json);
/**
 * 编码排序
 */
var idd = true;
function idxu(div1) {
    if (idd) {
        json.sort(function (a, b) {
            return b.id - a.id;
        });
        div1.innerHTML = '↑';
        div1.className = 'shang-wrapper';
        idd = false;
    }
    else {
        json.sort(function (a, b) {
            return a.id - b.id;
        });
        div1.innerHTML = '↓';
        div1.className = 'xia-wrapper';
        idd = true;
    }
    load(json);
}
/**
 * 价格
 */
var ispri = true;
function prixu(div2) {
    if (ispri) {
        json.sort(function (a, b) {
            return b.price - a.price;
        });
        div2.className = 'shang-jia';
        ispri = false;
    }
    else {
        json.sort(function (a, b) {
            return a.price - b.price;
        });
        div2.className = 'xia-jia';
        ispri = true;
    }
    load(json);
}
/**
 * 搜索
 */
function sou(inp) {
    var val = inp.value;
    var arr1 = json.filter(function (item) {
        return item.goods_name.includes(val);
    });
    load(arr1);
}
/**
 * 每页条数
 */
// let fanye:HTMLSpanElement = document.getElementById('fanye-wrapper')
// function pnum(inp:HTMLInputElement) {
//     let pagesize = Number(inp.value)
//     let pagenum = Number(Math.ceil(json.length / pagesize))
//     fanye.innerHTML = ''
//     for(var a = 1;a <= pagenum;a++) {
//         let p = document.createElement('p')
//         p.innerHTML=`${a}`
//         fanye.appendChild(p)
//     }
//     let arr = json.splice(0,pagesize)
//     load(arr)
// }
