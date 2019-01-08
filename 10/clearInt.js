
//最常见方法
/*
function clearInt(arg) {
    let arr = [];
    let len = arg.length;
    for(let i = 0;i < len;i++){
        if(arr.indexOf(arg[i]) === -1){
            arr.push(arg[i]);
        }
    }
    return arr;
}*/
//当indexOf()不能使用时
/*function clearInt(arg){
    let arr = [arg[0]];
    //很重要！！如果arr = []，则对于第二层循环根本就无法进入
    // 如果arr = arg[0]，则其是一个数，不是数组，arr.length==undifine,永远无法进入循环
    // 且整数的push方法无效，会报错
    let len = arg.length;
    for (let i = 0;i < len;i++){
        for(let j = 0;j < arr.length;j++){
            if (arr[j] === arg[i]){
                break;
            }else if(j === arr.length-1){
                arr.push(arg[i]);
            }
        }
    }
    return arr;
}*/

//当使用哈希方法时
/*function clearInt(arg) {
    let hash = [];
    let result = [];
    let len = arg.length;
    for(let i = 0;i < len;i++){
        if (!hash[arg[i]]){
            hash[arg[i]] = true;
            result.push(arg[i]);
        }
    }

    return result;
}*/

//当使用map方法时
/*function clearInt(arg) {
    let map = {};
    return arg.filter(function (item) {
        if (!map[item]){
            map[item] = true;
            return true
        }else{
            return false
        }
    });
}*/

//当使用排序方法时
function clearInt(arg) {
    let len = arg.length;
    let temp = arg.sort();
    let result = [temp[0]];
    /*for(let i = 0;i < len;i++){
        for(j = i;j < len;j++){
            if (arg[i] > arg[j]){
                temp = arg[i];
                arg[i] = arg[j];
                arg[j] = temp;
            }
        }
    }*/

    for (let i = 1;i < len;i++){
        if(temp[i] !== temp[i-1]){
            result.push(temp[i])
        }
    }
    return result;
}

const test = [1,2,3,2,5,3,6];
clearInt(test);
console.log(clearInt(test));