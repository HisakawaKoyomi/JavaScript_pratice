
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
function clearInt(arg){
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
}

const test = [1,2,3,2,5,3,6];
clearInt(test);
console.log(clearInt(test));