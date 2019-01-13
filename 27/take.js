function take(arr,startIndex,endIndex) {
    return arr.join('').slice(startIndex,endIndex + 1).split('')
}

const arr = [1,2,3,4,5,6,7,8];
for (const x of take(arr,3,5)){
    console.log(x);
}