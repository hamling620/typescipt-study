// 类型别名
// 使用type关键字

type Name = string
type NameResolve = () => string
type NameOrResolve = Name | NameResolve

function getName (n: NameOrResolve): Name {
    if (typeof n === 'string') {
        return n
    }
    return n()
}

// 类型字面量，同样使用type关键字
type eventName = 'click' | 'scroll' | 'mousemove'
function handleEvent (ele: Element, e: eventName) {
    console.log(ele, e)
}

handleEvent(document.getElementById('hello'), 'click')

export {}