(() => {

    // 抽象类 不能用来创建对象
    abstract class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello(): void
    }

    class Dog extends Animal {

        sayHello() {
            console.log('汪汪汪');

        }
    }
})()