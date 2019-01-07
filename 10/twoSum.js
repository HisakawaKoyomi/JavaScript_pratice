/*function twoSum(arg,sum) {
    let len = arg.length
    let result = [];
    for (let i = 0;i < len;i++){
        for(let j = i + 1;j < len;j++)//为了防止出现(i,j)vs(j,i)类的重复
             {
                 if(arg[i] + arg[j] === sum){
                     result.push([i,j]);
                 }
             }
    }
    return result;//不可以在循环中提前else return，因为是找到结果退出，而不是找不到结果退出！！
}*/

//map法优化性能
function twoSum(arg,sum){
    let hash = {} //使用map而不使用数组作为映射表，因为map无序，较集中管理
    let result = [];
    let len = arg.length;
    for(let i = 0;i < len;i++){
        if(!hash[arg[i]]){
            hash[sum - arg[i]] = i;
        }else{
            result.push([i,hash[arg[i]]])
        }
    }
    return result
}

const arr = [1,2,3,4,5,6,7,8,9,0];
const num = 6;
console.log(twoSum(arr,num));