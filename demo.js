const promiseTimers = [];
for (let i = 0;i <= 10;i++){
    promiseTimers.push(setTimeout(function () {
                console.log(i);
            },i*1000)
        )
}
