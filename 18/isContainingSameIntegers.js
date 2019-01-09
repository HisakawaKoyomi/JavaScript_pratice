//较复杂的方法
/*
function isContainingSameIntegers(arr1,arr2) {
    let result= [];
    arr1.forEach(item => {
        if (arr2.indexOf(item) !== -1){
            result.push(item);
        }
    });
    return (result.length !== 0)
}
*/
/*function isContainingSameIntegers(arr1,arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())
}*/

function isContainingSameIntegers(arr1,arr2) {
    let result = arr1.filter(item => {
        if (arr2.indexOf(item) !== -1){
            return true
        }
    });
    return (result.length !== 0)
}


const a = [1,2,3];
const b = [2,1,4];
console.log(isContainingSameIntegers(a,b));

