/*let arr = [1,2,3];
let i = 0;
arr[i++] += 5;
console.log(arr[0]);
console.log(i);
*/
let arr = [1,2,3];
let i = 0;
arr[i++] = arr[i++] + 5;
console.log(arr[2]);
console.log(arr[1]);
console.log(arr[0]);
console.log(i);
