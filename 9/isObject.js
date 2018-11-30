function isObject(obj) {
   // return typeof obj === 'object';
   // return Object.prototype.toString.call(obj) === '[object Object]';
    // return obj instanceof Object;
    return obj === Object(obj);

}

let x = {a: 1};
let y = 'abc';
console.log(isObject(x));
console.log(isObject(y));