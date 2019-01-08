function diff1(date1,date2) {
    return date2 - date1;
}
function diff2(date1,date2) {
    return date2.getTime() - date1.getTime();
}

function verifyEf(f) {
    let time1 = new Date();
    let time2 = new Date(0);

    let start = Date.now();
    for (let i = 0;i < 100000;i++){
        f(time1,time2);
    }
    return Date.now() - start;
}

console.log(verifyEf(diff1));
console.log(verifyEf(diff2));