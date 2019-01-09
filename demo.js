let buffer = new ArrayBuffer(1024);
let a = new Uint8Array(buffer);
a[0] = 0xff;
console.log(a[0]);