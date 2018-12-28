function isArray(arg){
    //return Object.prototype.toString.call(arr) === '[object Array]';
    return Array.isArray(arg);
}

const arr = [1,2,3];
console.log(isArray(arr));