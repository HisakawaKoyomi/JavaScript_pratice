function isEmptyObject(obj) {
    /*for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            return false
        }
    }
    return true*/
    //return JSON.stringify(obj) === JSON.stringify({});
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

let x = {};
let y = {a: 1};
console.log(isEmptyObject(x));
console.log(isEmptyObject(y));