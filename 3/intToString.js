const num = 5;

function intToString(num){
    if (typeof(num) === 'number'){
        let result = num.toString(2);
        while(result.length < 8){
            result = '0' + result; //循环是个好方法
        }
        return result;
    }else{
        console.log('not fit');
    }
}

console.log(intToString(num));