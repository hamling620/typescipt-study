class Dog {
    name: string = 'dog'
    constructor (name: string, public age?: number) {
        this.name = name
        this.age = age
    }
    private eat () {}
    readonly id: number = 10
}

// 类实例属性需要进行定义，才能赋值
// 可以在参数中通过public修饰符声明类属性
// 类成员修饰符，类实例属性和原型方法默认有public修饰符
// private修饰的成员只能在当前类中访问，不能在实例以及子类中访问
// protected修饰的成员只能在当前类和子类中访问，不能在实例中访问
// private修饰constructor，该类不能进行实例化，也不能继承，只能在类中使用
// protected修饰constructor，该类不能被实例化，但是可以实现继承，基类

// readonly 只读属性
// static 静态成员，只能通过类来调用，而不能通过实例调用

const dog = new Dog('hamling', 12)
console.log(dog.name)
// dog.eat() 私有成员，实例无法访问

class Husky extends Dog {
    constructor (name: string) {
        super(name)
    }
}

// 抽象类只能被继承，不能被实例化
// 抽象方法必须被子类实现
// 抽象类实现多态度
abstract class Person {
   public name: string
   constructor (name: string) {
       this.name = name
   } 
   eat () {}
   abstract sayHi (): void
}

class Student extends Person {
    constructor (name: string) {
        super(name)
    }

    sayHi () {}
}

class Teacher extends Person {
    sayHi () {}
}

const persons: [Student, Teacher] = [new Student('std'), new Teacher('tea')]
persons.forEach(p => p.sayHi())

class Flow {
    sleep1 () {
        return this
    }
    sleep2 () {
        return this
    }
}

const flow :Flow = new Flow()
flow.sleep1().sleep2() // 链式调用

class MyFlow extends Flow {
    next () {
        return this
    }
}

const myFlow: MyFlow = new MyFlow()
myFlow.sleep1().next().sleep2().next()