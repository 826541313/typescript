class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    // 获取蛇
    bodies: HTMLCollection;
    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;


        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
        // 让第一次的位置随机
        this.change()

    }

    // 获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    change() {

        let top, left
        // 生成一个随机的位置
        top = Math.round(Math.random() * 29) * 10
        left = Math.round(Math.random() * 29) * 10

        // 检查生成的位置是否与身体重叠
        for (let i = 0; i < this.bodies.length; i++) {
            let ileft = (this.bodies[i] as HTMLElement).style.left
            let itop = (this.bodies[i] as HTMLElement).style.top
            if (ileft.slice(0, ileft.length - 2) === left + ''
                && itop.slice(0, itop.length - 2) === top + '') {
                // 若食物位置与身体重叠，则change
                this.change()
            }
        }
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }

}

export default Food