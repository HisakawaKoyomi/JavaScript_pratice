/*function getObjectKeys(obj) {
    return Object.keys(obj);
}*/

function getObjectKeys(obj){
    let result = [];
    for (let prop in obj){
        if (obj.hasOwnProperty(prop)){
            result.push(prop);
        }
    }
    return result;
}


let x = {a: 1, b: 2};
console.log(getObjectKeys(x));