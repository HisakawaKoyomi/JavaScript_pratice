function multiplyObj(obj) {
    for (let prop in obj){
        if (obj.hasOwnProperty(prop) && typeof obj[prop] === 'number'){
            obj[prop] = obj[prop]*2;
        }
    }
    return obj;
}

const x = {a: 3, b: 'ao', c: 1};
console.log(multiplyObj(x));