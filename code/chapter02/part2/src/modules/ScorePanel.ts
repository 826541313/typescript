class ScroePanel {
    // 记录分数和等级
    score = 0;
    level = 1;
    // 分数和等级所在的元素
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 最大等级
    maxLevel: number
    // 升级所需分数
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 加分的方法
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''

        // 判断是否升级
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }
    }
}

export default ScroePanel