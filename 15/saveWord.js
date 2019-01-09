function saveWord(arr) {
    let hash = {};
    return arr.filter(item => {
        let key = item.toLowerCase().split('').sort().join('');
        if (!hash[key]) {
            hash[key] = true;
            return true
        }else {
            return false
        }
    })
}
const test = ['hello','hlloe','heillo','Hello'];
console.log(saveWord(test));