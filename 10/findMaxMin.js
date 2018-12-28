function findMaxMin(arg) {
   /* let max = arg[0];
    let min = arg[0];
    let len = arg.length;
    for(let i = 1;i < len;i++){
        if (arg[i] > max){
            max = arg[i];
        }
        if(arg[i] < min){
            min = arg[i];
        }
    }*/
    max = Math.max.apply(null,arg);
    min = Math.min.apply(null,arg);
    console.log('max is ' + max);
    console.log('min is ' + min);
}

const arr = [2,1,4,3,5];
findMaxMin(arr);