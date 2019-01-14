setTimeout(() => console.log('1'));

let pro = new Promise(resolve => {
    setTimeout(function (){
        console.log('2');
        resolve();
    });

});
pro.then(() => (setTimeout(() => console.log('3'))));
console.log('4');


