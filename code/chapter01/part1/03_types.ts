let a: 10;
a = 10;

let b: 'male' | 'female';
b = 'male';
b = 'female';

let c: boolean | string;
c = true;
c = 'hello';

// let d: any = 10;
let d;
d = 'hello';
d = true;

let e: unknown = 10;
e = 'hello';
e = true

let s: string

s = d //any 可以赋值给任意变量

e = 'hello';

// s=e; // 报错 unknown 不能直接赋值给其他变量

s = e as string // 类型断言，可以来告诉编译器变量的实际类型

s = <string>e

function fn(): void {
}

function fn2(): never {
    throw new Error("");
}