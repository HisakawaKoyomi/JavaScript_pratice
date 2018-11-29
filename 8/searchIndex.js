//此法不仅可以查找字符，还可以查找字符串
/*function searchIndex(content,target) {
    return content.indexOf(target)
}*/

//此法仅适合查找字符
function searchIndex(content,char) {
    let len = content.length;
    for(let i = 0;i < len;i++){
        if (char === content[i]){
            return i
        }
    }
    return -1
}

const x = 'abcd';
const y = 'd';
console.log(searchIndex(x,y));