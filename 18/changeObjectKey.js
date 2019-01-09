function changeObjectKey(obj,oldKey,newKey) {
    if(obj.hasOwnProperty(oldKey)){
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
    }
    return obj
}

const a = {
    aa: 2,
    ab: 3
};

console.log(changeObjectKey(a,'aa','ac'));