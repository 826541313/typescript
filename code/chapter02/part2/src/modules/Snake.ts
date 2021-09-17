class Snake {
    // 获取蛇头
    head: HTMLElement
    // 获取蛇身（包括蛇头）
    bodies: HTMLCollection
    // 获取蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        // 类型断言
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇头坐标
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    // 修改蛇头坐标
    set X(value) {

        // 若新值与旧值相同，则直接返回不再修改
        if (this.X === value) {
            return
        }

        // 值的合法范围
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了!");
        }

        // 修改位置时，如向右,则不能向左,反之亦然
        // 怎么判断呢，不能和第二节的身体位置一样
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {

            // 若发生了掉头，让蛇向反方向继续移动
            if (value > this.X) {
                // 如果新值value大于旧值，则说明蛇在向右走，此时发生掉头，应该蛇继续向左走
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.left = value + 'px'

        // 检查是否撞到自己
        this.checkHeadBody()
    }

    set Y(value) {

        if (this.Y === value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了!");
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody()

        this.head.style.top = value + 'px'

        this.checkHeadBody()

    }

    // 增加身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 蛇身体移动的方法
    moveBody() {

        // 将后边的身体设置为前边身体的位置

        // 遍历获取所有的身体
        for (let i = this.bodies.length - 1; i > 0; i--) {

        // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px'
        }
    }

    // 检查是否撞到自己
    checkHeadBody() {
        // 从第五节开始检查，检查其是否和蛇头的坐标重叠
        for (let i = 4; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇撞到自己了
                throw new Error("撞到自己了！")
            }
        }
    }
}

export default Snake