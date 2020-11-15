// 函数表达式定义函数类型
// 接口定义函数的类型
// 类型别名定义函数的类型
// 函数声明直接定义函数的类型

// 以上四种为typescript中函数的定义方式，前三种只是定义类型，并没有实现

// 函数参数的使用
// 必选参数
// 可选参数 必须放在必选参数之后
// 参数默认值
// rest参数 必须放在必选和可选参数之后

// 函数重载
function reverse (x: string): string
function reverse (x: number): number
function reverse (x: string | number): string | number {
    if (typeof x === 'string') {
        return x.split('').reverse().join('')
    } else {
        return Number(x.toString().split('').reverse().join(''))
    }
}

function getTotal (...rest: number[]): number
function getTotal (...rest: string[]): string
function getTotal (...rest: number[] | string[]): number | string {
    const first = rest[0]
    if (typeof first === 'number') {
        return (rest as number[]).reduce((prev, cur) => prev + cur)
    } else {
        return rest.join('')
    }
}

function add1 (x: number, y: number): number {
    return x + y
}

function add2 (x: number, y?: number): number {
    return y ? x + y : x
}

function add3 (x: number = 1, y: number) {
    return x + y
}

interface SearchFunc {
    (source: string, substring: string): boolean;
}

const searchFunc: SearchFunc = (source, substring) => {
    return source.search(substring) !== -1
}

export {}