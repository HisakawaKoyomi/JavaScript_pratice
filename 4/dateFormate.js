const time = 1000000;
const day = Math.floor(time/(24*60*60));
let leftSecond = time%(24*60*60);
const hour = Math.floor(leftSecond/(60*60));
leftSecond = leftSecond%(60*60);
let min = Math.floor(leftSecond/60);
leftSecond = leftSecond%(60);

console.log(day + '天' + hour + '时' + min + '分' + leftSecond + '秒');

