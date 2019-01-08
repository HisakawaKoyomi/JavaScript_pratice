function jsonClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/*function jsonClone(obj) {
    return Object.assign(obj)
}*/

const data1 = {"a":1,"b":2};
const data2 = {"a":{"aa":1,"bb":2},b:2};
console.log(jsonClone(data1));
console.log(jsonClone(data2));

