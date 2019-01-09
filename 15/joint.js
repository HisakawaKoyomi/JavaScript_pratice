function joint(arr1,arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return new Set([...set1].filter(item => set2.has(item)))
}

const a = [1,2,3,2,4,5];
const b = [3,2,4,6];
console.log(joint(a,b));