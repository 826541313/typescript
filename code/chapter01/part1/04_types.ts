let a: object = {};

let b: { name: string };

// b = { name: '孙悟空', age: 18 } // 报错

let c: { name: string, age?: number }

c = { name: '孙悟空' }

let d: { name: string, [propName: string]: any }
c = { name: '猪八戒', age: 18 }

let e: (a: number, b: number) => number;
d = function (n1: number, n2: number): number {
    return n1 + n2
}

let f: string[];
f = ['a', 'b', 'c']

let g: number[];

let h: Array<number>;
h = [1, 2, 3]

// 元组 固定长度的数组

let z: [string, number];

z = ['hello', 123]

enum Gender {
    Male,
    Female
}

type myType = string;
type myType2 = 1 | 2 | 3 | 4 | 5

let k: 1 | 2 | 3 | 4 | 5;
let l: myType2

let m: myType