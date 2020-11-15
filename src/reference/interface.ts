interface List {
    readonly id: number;
    name: string;
    age?: number;
    [prop: string]: any;
}

interface Result {
    data: List[];
}

function render (result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        // value.id++ 只读属性
        if (value.age) {
            console.log(value.age)
        }
    })
}

// const result = {
//     data: [
//         { id: 1, name: 'hamling', sex: 'male' },
//         { id: 2, name: 'lucile' }
//     ]
// }

render({
    data: [
        { id: 1, name: 'hamling', sex: 'male', age: 12 },
        { id: 2, name: 'lucile' }
    ]
} as Result)

// 三种解决方案
// 1、类型推断
// 2、可选属性
// 3、任意属性

// 4、只读属性

// 接口是对行为的抽象，具体如何行动需要类去实现
// 接口也可以对对象的形状进行描述

// 接口定义数组
interface StringArray {
    [index: number]: string;
}

let names: StringArray = ['hamling', 'lucile']

interface Names {
    [x: string]: number;
    [y: number]: number;
}
// 字符串索引和数字索引类型要兼容

// 接口函数
interface Add1 {
    (x: number, y: number): number;
}
let add1: Add1 = (x, y) => x + y
// 函数声明定义类型
let add2: (x: number, y: number) => number
add2 = (x, y) => x + y
// 类型别名定义
type Add3 = (x: number, y: number) => number
let add3: Add3 = (x, y) => x + y

// 混合类型
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib (version: string) {
    const lib: Lib = (() => {}) as Lib
    lib.version = version
    lib.doSomething = () => {}
    return lib
}