const pld = 'a1bcdcb1a';

/*方法一
function isPalindrome(str) {
    let temp = str.split('').reverse().join('');
    return (temp === str);

}
*/


/*方法二
function isPalindrome(str){
    let l = str.length;
    for (let i = 0;i < l/2;i++){
        if(str[i]!==str[l-i-1]){
            return false;
        }
    }
    return true;
}
*/


function isPalindorme(str) {
    let index = 0;
    let len = str.length;
    while(index++ < len/2){
        if (str[index]!==str[len-index-1]){
            return false;
        }
    }
    return true;
}

console.log(isPalindorme(pld));