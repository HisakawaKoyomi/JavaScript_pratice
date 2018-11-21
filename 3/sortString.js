const str =  'koyomi126';//从小到大的顺序

function sortString(str){
    if(typeof(str) === 'string'){
        let result;
        let arr = str.split('');
        let tmp;
        for(let i = 0;i < arr.length;i++){
            for(let j = i + 1;j<arr.length;j++){
                if(arr[i].charCodeAt(0) > arr[j].charCodeAt(0)){
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
        result = arr.join('');
        return result;
    }else{
        console.log('not fit');
    }
}

console.log(sortString(str));
