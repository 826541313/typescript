(() => {
    class Person {

        // public 公共
        // private 私有属性
        // protected 只能在当前类和其子类中使用

        public name: string
        private age: number

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age
        }

        getAge() {
            return this.age
        }

        setName(value: number) {
            if (value >= 0) {
                this.age = value
            }
        }
    }

    
})()