function countSec(){
    let now = new Date();
    let today = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0);
    let diff = now.getTime() - today.getTime();
    return Math.floor(diff/1000)
}

console.log(countSec());