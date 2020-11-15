// 不预先确定的类型，具体的类型在使用的时候确定
// 泛型可用于函数、类、接口定义

function log<T> (value: T) {
    console.log(value)
    return value
}

log(['a', 'b'])

type LogType = <T>(value: T) => T
const log1: LogType = log

function createArray<T> (x: T, length: number): T[] {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
        result.push(x)
    }
    return result
}
createArray('x', 3)

function swap<T, U> (tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
swap([1, 'hello'])

// 泛型约束接口
interface MyLog<T> {
    (value: T): T;
}
const log2: MyLog<number> = log

interface CreateArray<T> {
    (x: T, length: number): T[];
}
let myCreateArray: CreateArray<string> = createArray

interface LengthWise {
    length: number;
}

function loggingIdentify<T extends LengthWise> (arg: T): T {
    console.log(arg.length)
    return arg
}

// 泛型约束
loggingIdentify({ length: 3 })
loggingIdentify(['hello'])
loggingIdentify('hello')

// 函数和类可以轻松地支持多种类型，增强程序的扩展性
// 不必写多条函数重载，冗长的联合声明类型，增强代码的可读性
// 灵活地控制类型之间的约束

// 泛型类
// 泛型不能约束静态成员
class GenericNumber<T> {
    // static n: T
    zeroNo: number
    add: (x: T, y: T) => T
}
let genericNumber = new GenericNumber<number>()
genericNumber.zeroNo = 0
genericNumber.add = (x, y) => x + y

// 类型之间的相互约束
function copyFields<T extends U, U> (target: T, source: U): T {
    for (let id in source) {
        target[id] = (source as T)[id]
    }
    return target
}
copyFields({ a: 1, b: 2, c: 3}, {b: 1, c: 12 })

