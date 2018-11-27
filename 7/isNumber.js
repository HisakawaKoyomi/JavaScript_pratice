/*
function isNumber(x) {
    if(typeof x === 'number'&&isFinite(x)){
        return true
    }else{
        return false
    }

    //简化写法
    return typeof x === 'number' && isFinite(x)
}
*/
function isNumber(x) {
    return Object.prototype.toString.call(x) === '[object Number]'
}

const num = 3;
console.log(isNumber(num));