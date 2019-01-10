/*
var x = 100;

function creatInt() {
    return x++
}

console.log(creatInt());
console.log(creatInt());*/

function gen(startValue) {
    return function (num) {
        startValue++;
        num++;
        return [startValue,num];
    }

}
const genInteger = gen(100);
console.log(genInteger(10));
console.log(genInteger(10));