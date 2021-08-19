class Person {
    // 实例属性
    name: string = '孙悟空';

    // 静态属性（类属性）
    static age: number = 18

    // readonly 表示只读属性

    // 定义方法 

    sayHello() {
        console.log('Hello 大家好！');

    }
}

const per = new Person()