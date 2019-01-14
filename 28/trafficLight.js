let promiseTimes = [];
let colorMap = {
  '1': '红',
  '2': '绿',
  '3': '黄'
};

for (let i = 1;i <= 3;i++){
    promiseTimes.push(
        function (){
            return new Promise((resolve => {
                setTimeout(function () {
                    console.log(colorMap[i]);
                    resolve();
                    },i*1000);
            }))
        }
        );
}

function* trafficLight() {
    while (true){
            yield promiseTimes[0]();
            promiseTimes.push(promiseTimes.shift());
    }
}
let gen = trafficLight();

function run() {
    let result = gen.next();
    if (!result.done){
        result.value.then(run);
    }
}

run();


//此版异步操作不合要求
/*
function* trafficLight() {
    while (1){

        yield setTimeout(() => console.log('红'),2000);
        yield setTimeout(() => console.log('绿'),1000);
        yield setTimeout(() => console.log('黄'),3000);
    }
}

let gen = trafficLight();
gen.next();
gen.next();
gen.next();
gen.next();
*/

