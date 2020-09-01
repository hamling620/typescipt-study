let isDone: boolean = false
// let flag: boolean = new Boolean() 
// flag是包装类型（wrapped object），是Boolean的构造函数
let flag: Boolean = new Boolean(1) // Boolean是TypeScript的内置类型
let hasLogin: boolean = Boolean(1)

// 基本类型不能赋值为其它类型，当然undefined和null是所有类型的子类型，在设置strictNullChecks为false的情况下可以把undefined和null赋值给其他类型

let hello: string = 'hello'

let decLiteral: number = 10
let hexLiteral: number = 0xf00d

let binaryLiteral: number = 0b0101 // 二进制
let octalLiteral: number = 0o070 // ES6八进制以0o开头
let notANumber: number = NaN
let infinityNumber: number = Infinity


let un: undefined = undefined
let nu: null
nu = undefined
nu = null

// void类型表示没有返回值的函数返回值（JavaScript中undefined不是保留字，可以当做变量使用，以void代替作为没有返回值函数的返回值），void只能被赋值为undefined和null
const notReturn = (): void => {}

// any类型
// 声明一个变量不声明类型也不进行赋值，那么它是any类型，any类型可以赋值为任意的类型
let anyType
anyType = 100
anyType = 'hundred'

// never类型表示永远不存在值的类型，抛出异常或根本不会有返回值的函数，以及箭头函数表达式的函数类型
const error = () => {
    throw new Error()
}

const endless = () => {
    while (true) {}
}

type Foo = string | number | boolean
function controlFlowAnalysisWithNever (foo: Foo) {
    if (typeof foo === 'string') {

    } else if (typeof foo === 'number') {
        
    } else {
        // const check: never = foo // 这里防止联合类型中某一个类型没有实现，报出错误
    }
}

// 类型推论
// 如果没有指定明确的类型，TypeScript会根据类型推论将其推断出一个类型
// 如果声明一个变量没有声明类型，也没有赋值，那么它会被推断为any类型

export {} // 使用ES6语法将ts文件设置为模块