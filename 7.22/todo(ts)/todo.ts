/**
 * 添加的数组中的内容
 */
interface liItem {
    checked:boolean,
    id:number,
    value:string
}



/**
 * 定义每条里面内容的类型
 */
type todoList = Array<liItem>



/**
 * 获取ul
 */
let ul:HTMLUListElement = document.getElementsByTagName('ul')[0]



/**
 * 按钮们
 */
let allren:HTMLElement|null = document.getElementById('allren')
let yiwc:HTMLElement|null = document.getElementById('yiwc')
let weiwc:HTMLElement|null = document.getElementById('weiwc')
let qing:HTMLElement|null = document.getElementById('qing')



/**
 * 新添加的数组
 */
let todoArray:todoList = []



/**
 * id递增
 */
let nextId:number = 1



/**
 * 新添加的内容
 */
//     '//@ts-ignore' 隐藏文件中的报错
function addTodo(event:{ keyCode:number }) {
    if(!event || event.keyCode === 13) {
        // @ts-ignore
        let inputValue:string = document.getElementsByClassName('input')[0].value
        if(inputValue) {
            oneId(inputValue)
            // @ts-ignore
            document.getElementsByClassName('input')[0].value = ''
        }
    }
}



/**
 * id唯一
 */
function oneId(inputValue:string) {
    if(todoArray.length > 0) {
        nextId++
    }
    let addItem:liItem = {
        checked:false,
        id:nextId,
        value:inputValue
    }
    todoArray.push(addItem)
    load(todoArray)
}



/**
 * 渲染html
 */
function load(data:todoList, checkedId?:number) {
    ul.innerHTML = ''
    data.forEach((item) => {
        let li:HTMLLIElement = document.createElement('li')
        if(item.checked) {
            li.className = 'isXuan'
        }else {
            li.className = ''
        }
        li.id = `${item.id}`
        // --------
        if(item.id == checkedId && item.checked) {}
        li.innerHTML = `
        <input type='checkbox' class='fu' id=${item.id} ${item.checked?'checked':null} onchange='isCheck(this)' />
        <span>${item.value}</span>
        <button class='del' id=${item.id} onclick=del(this)>X</button>
        `
        ul.append(li)
    })
}



/**
 * 删除
 */
function del(ele:liItem) {
    todoArray = todoArray.filter(item => item.id != ele.id)
    load(todoArray)
}



/**
 * 切换选中数据
 */
function isCheck(ele:liItem) {
    todoArray.forEach(item => {
        if(item.id == ele.id) {
            item.checked = !item.checked
        }
    })
    load(todoArray,ele.id)
}



/**
 * 清空
 */
function qingAll() {
    todoArray = []
    ul.innerHTML = ''
}