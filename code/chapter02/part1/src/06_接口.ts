(() => {
    type myType = {
        name: string,
        age: number,
        [propname: string]: any
    }

    interface myInrerface {
        name: string,
    }

    interface myInrerface {
        age: number
    }

    const obj: myInrerface = {
        name: 'sss',
        age: 111
    }

    // 接口中的所有属性都不能有实际的值
    // 接口中所有的方法都是抽象方法

    interface myInrer {
        name: string
        sayHello(): void
    }


    class MyClass implements myInrer {
        name: string

        constructor(name: string) {
            this.name = name
        }

        sayHello(): void {
            throw new Error("Method not implemented.")
        }


    }
})()