const num = 12345;
/*
function toThousand(x){
    let str = '';
    let temp = x.toString();
    let len = temp.length;
    for(let i = 0;i < len;i++){
        if((i+1)%3==0){
            str += temp[len-i-1] + ',';
        }else{
            str += temp[len-i-1];
        }
    }
    return str.split('').reverse().join('');
}
*/
//正则法
function toThousand(x){
    return x.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g,'$1,')
}



console.log(toThousand(num));