class Dog {
    // name = '旺财';
    // age = 3;
    name: string;
    age: number;

    constructor(name: string, age: number) {

        // 在构造函数中this指向当前创建的那个对象
        // console.log(this);

        this.name = name;
        this.age = age;

    }

    bark() {
        alert('汪汪汪')
    }
}

const dog = new Dog("123", 18)