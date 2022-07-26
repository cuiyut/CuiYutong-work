/**
 * 装饰器
 */
function xiao(target:hua,propertyKey:string,descriptor:PropertyDescriptor) {
    return {
        ...descriptor,
        value:function(name:string) {
            console.log('xixi');
            return descriptor.value(name)
        }
    }
}
class hua {
    huaing:string
    constructor(message:string) {
        this.huaing = message
    }
    @xiao
    huaa(name:string):string {
        console.log(`hi,${name}`);
        return 'hello'
    }
}
const gg = new hua('msg')
gg.huaa('tom')
gg.huaa('tom')
gg.huaa('tom')
console.log(gg);

/**
 * 装饰器组合
 */
function setname () {
    console.log('get setname');
    return function (target:string) {
        console.log('setname');
    }
}
function setage () {
    console.log('get setage');
    return function(target:string) {
        console.log('setage');
    }
}
// @setname()    //'get setname'
// @setage()     //'get setage'
// class test{}   //'setage'  'getname'

/**
 * 类装饰器
 */
interface bar {
    work: () => void
}
type ws<T,U> = {
    new() :T
} & U
type bws = ws<bar,{life:number}>
function sip<T>() {
    return <U extends T>(constructor:U) => {}
}
@sip<bws>()
class foo {
    static life:number
    work() {
        // .....
    }
}