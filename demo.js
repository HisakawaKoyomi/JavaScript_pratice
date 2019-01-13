let arr = ['blue','green'];
arr.notAnIndex = 123;
Array.prototype.protoProp = 456;

for(k in arr) console.log(k);