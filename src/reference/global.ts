// 内置对象
// ECMAScript内置对象
let e: Error = new Error('error')
let bool: Boolean = new Boolean(1)
let reg: RegExp = /[a-z]/
let date: Date = new Date()

// DOM内置对象
// Document、HTMLElement、Element、NodeList、Event
let body: HTMLElement = document.body
let lists: NodeList = document.querySelectorAll('li')
document.addEventListener('click', (e: MouseEvent) => {})

// 内置对象的定义文件都定义在TypeScript核心定义文件中

// node使用TypeScript，需要安装第三方定义文件@types/node