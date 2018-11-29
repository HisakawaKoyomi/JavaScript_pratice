/*function isString(x) {
    return typeof x === 'string';
}*/

//慎用
/*function isString(x) {
    return x instanceof String;
}*/

function isString(x){
    return Object.prototype.toString.call(x) === '[object String]'
}

const str = 'abc';
console.log(isString(str));

