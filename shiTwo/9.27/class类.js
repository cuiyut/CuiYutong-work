class People {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    sport() {
        return this.name + '会运动'
    }
}
/**
 * 构造函数写法
 */
function Parent() {
    this.name = arguments.name
    this.age = arguments.age
    this.sport = function() {
        return this.name + '会运动'
    }
}
let children = new People('小李',12)
console.log(children);
console.log(children.sport());