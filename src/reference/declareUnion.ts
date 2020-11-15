// 声明合并
// 函数合并 -> 重载

interface Alarm {
    price: number;
    alert(): void;
}

interface Alarm {
    weight: number;
}

let alarm: Alarm = {
    price: 10,
    weight: 12,
    alert () {}
}

// 类合并同接口合并一样
// 接口中的方法与类型一样

export {}