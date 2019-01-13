const promiseTimers = [];
for (let i = 0;i <= 10;i++){
    promiseTimers.push(
        new Promise((resolve => {
            setTimeout(function () {
                console.log(i);
                resolve(i);
            },i*1000)
        })))
}

//Promise.all(promiseTimers).resolve(['success']);

Promise.all(promiseTimers).then(value => {
    console.log('第 '+ value + ' 个计时器全部执行完毕');
});
