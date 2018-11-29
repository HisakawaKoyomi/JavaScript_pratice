function exChange(str,N,word,strAssign) {
 let words = str.split(' ');//核心代码
 let len = words.length;
 let time = 1;
 for (let i = 0;i < len;i++ ){
     if (words[i] === word){
         if(time === N){
             words[i] = strAssign;
             break; //节省内存开销
         }else{
             time++; //自加的变量不要混淆！！
         }
     }
 }
 return words.join(' ');
}

const x = 'aa ff fi nuf ngy nuf nuf gym nuf';
const replace = 'nuf';
const replaceW = 'A';
console.log(exChange(x,2,replace,replaceW));