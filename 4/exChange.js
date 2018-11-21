let one = 1;
let two = 2;
//method 1
let tmp;
tmp = one;
one = two;
two = tmp;

//method 2
one = one + two;
two = one - two;
one = one - two;

//method 3
one = one^two;
two = one^two;
one = one^two;

//method 4
[one,two] = [two,one];//解构赋值是个好方法

console.log(one,two);//输出2，1