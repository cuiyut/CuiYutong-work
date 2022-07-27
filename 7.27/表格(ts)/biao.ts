let tbody: HTMLTableSectionElement = document.getElementsByTagName('tbody')[0]
let span: HTMLSpanElement = document.getElementsByTagName('span')[0]
let span1: HTMLSpanElement = document.getElementsByTagName('span')[1]
interface gui {
    id: number,
    goods_name: string,
    price: number
}
let arrays: Array<gui> = [
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
]
let array: Array<gui> = arrays
let isid: boolean = true
let ispri: boolean = true

// 渲染
function load(arr: Array<gui>) {
    tbody.innerHTML = ''
    arr.forEach(ele => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
                <td>
                ${ele.id}
                </td>
                <td>
                ${ele.goods_name}
                </td>
                <td>
                ${ele.price}
                </td>
        `
        tbody.appendChild(tr)
    });
    span.innerHTML = String(array.length)
    let numipt: HTMLInputElement = document.getElementsByTagName('input')[1]
    let ym: number = Number(Math.ceil(array.length / Number(numipt.value)))
    span1.innerHTML = ''
    for (let i = 0; i < ym; i++) {
        let span = document.createElement('span')
        span.innerHTML = `
            <button onclick="go(this)">
            ${String(i + 1)}
            </button>
            `
        span1.appendChild(span)
    }
}
load(array)

// ID排序
function idxu(ele: HTMLButtonElement) {
    if (isid) {
        array.sort(function (a, b) {
            return b.id - a.id
        })
        ele.innerHTML = '↑'
        isid = false
    } else {
        array.sort(function (a, b) {
            return a.id - b.id
        })
        ele.innerHTML = '↓'
        isid = true
    }
    load(array)
}

// 价格排序
function prixu(ele: HTMLButtonElement) {
    if (ispri) {
        array.sort(function (a, b) {
            return b.price - a.price
        })
        ele.innerHTML = '↑'
        ispri = false
    } else {
        array.sort(function (a, b) {
            return a.price - b.price
        })
        ele.innerHTML = '↓'
        ispri = true
    }
    load(array)
}

// 搜索
function sou(ele: HTMLInputElement) {
    let val = ele.value
    var arr = array.filter(ele => {
        return ele.goods_name.includes(val)
    })
    load(arr)
}