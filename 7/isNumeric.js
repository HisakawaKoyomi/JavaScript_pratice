

function Numeric(str){
    let temp = str.split('');
    let len = temp.length;
    for (let i = 0;i < len - 1;i++){
        /*if (typeof temp[i] !== 'number'||!isFinite(temp[i])){
            return false
        }*/
        //上述方法错误，因为数字字符串即使拆为数组，也是String类型
        if (isNaN(parseInt(temp[i]))&&!isFinite(temp[i])){
            return false
        }//此方法存在无法判断单个字符的缺陷（循环法弊端）
    }
    return true
}

//简洁且正确的方法
/*
function Numeric(str){

    return !isNaN(parseInt(str))&&isFinite(str)
}
*/
const x = '23';
console.log(Numeric(x));