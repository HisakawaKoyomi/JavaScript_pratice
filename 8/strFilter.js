/*function strFilter(str) {
    let result = '';
    let len = str.length;
    for (let i = 0;i < len;i++){
        let charCode = str[i].charCodeAt(0);
        if(charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122){
            result += str[i];
        }
    }
    return result
}*/

function strFilter(str) {
    return str.replace(/[^a-z]+/gi,'')

}

const x = 'jaZi992,e';
console.log(strFilter(x));