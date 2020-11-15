// 类与接口之间的关系
// 类可以继承类
// 类可以实现接口

// 接口可以继承接口
// 接口可以继承类（继承所有成员，但不包含构造函数和静态成员）

interface Alarm {
    alert(): void;
}
class Door {}

class SecurityDoor extends Door implements Alarm {
    alert () {}
}

// 一个类可以继承多个接口
interface Light {
    lightOff(): void;
    lightOn(): void;
}

class Car implements Alarm, Light {
    alert () {}
    lightOff () {}
    lightOn () {}
}

// 接口继承接口
interface LightableAlarm extends Alarm {
    lightOn(): void
}

// 接口继承类
class Point {
    x: number
    y: number
    // private pp: number
    constructor (x: number, y: number) {
        this.x = x
        this.y = y    
    }
}

interface Point3D extends Point {
    z: number;
}

let p: Point3D = { x: 1, y: 1, z: 1 }

// 为什么接口可以继承类？
// 通过class声明类的时候除了创建一个类，还会创建一个类型
// Point除了可以当做类来使用，同样可以当做类型来使用

// Point当做类型使用，不包含构造函数和静态成员
