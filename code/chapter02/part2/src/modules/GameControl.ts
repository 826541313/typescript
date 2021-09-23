import Snake from "./Snake";
import Food from "./Food";
import ScroePanel from "./ScorePanel";

class GameControl {
    // 定义三个属性
    snake: Snake
    food: Food
    scorePanel: ScroePanel

    // 获取移动端按键
    directionBtn: HTMLCollection

    // 记录按键方向
    direction: string = ''

    // 记录是否结束
    isLive = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScroePanel(10, 1)
        this.directionBtn = document.getElementsByTagName('button')!
        this.init()
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {

        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))

        // 给移动端按键绑定事件
        for (let i = 0; i < this.directionBtn.length; i++) {
            this.directionBtn[i].addEventListener('click', this.buttonHandler.bind(this))
        }

        // 调用run方法，使蛇移动
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        console.log(event.key);
        this.direction = event.key
    }

    buttonHandler(event: any) {
        this.direction = event.path[0].name
    }

    run() {
        // 获取现在蛇头的坐标
        let X = this.snake.X
        let Y = this.snake.Y
        // 判断移动方向并移动
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
            case "w":
                Y -= 10
                break;
            case "ArrowDown":
            case "Down":
            case "s":
                Y += 10
                break;
            case "ArrowLeft":
            case "Left":
            case "a":
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
            case "d":
                X += 10
                break;
        }

        // 检查是否吃到食物
        this.checkEat(X, Y)

        // 修改蛇的位置
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {

            // 游戏结束
            alert(e.message + ' GANE OVER!')

            this.isLive = false
        }

        // 如果蛇还存活，继续调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 28);
    }

    // 检查是否吃到食物
    checkEat(X: number, Y: number) {

        if (X === this.food.X && Y === this.food.Y) {
            // 重置食物位置
            this.food.change()
            // 增加分数
            this.scorePanel.addScore()
            // 增加蛇的节数
            this.snake.addBody()
        }
    }

}

export default GameControl