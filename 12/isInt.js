let reg1 = /^([1-9]|1[0-2])$/;
let reg2 = /^[1-9]|1[0-2]$/;
let reg3 = /[1-9]|1[0-2]$/;
let reg4 = /[5-9]|1[0-2]$/;
let num = '217';
console.log(reg1.exec(num));
console.log(reg2.exec(num));
console.log(reg3.exec(num));
console.log(reg4.exec(num));