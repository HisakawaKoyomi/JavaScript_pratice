/*function isLeapYear(year) {
    if(!year % 100){
        return !(year % 400)
    }else{
        return !(year % 4)
    }
}*/

//优雅的写法——三元运算符可以取代算术上的分支结构
function isLeapYear(year) {
    return !(year % (!(year % 100)? 400: 4))
}




const time = 2000;
console.log(isLeapYear(time));