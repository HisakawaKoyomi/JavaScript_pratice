function toCommon(tyarr) {
    //return [...tyarr]
    //return Array.from(tyarr)
    return Array.prototype.slice.call(tyarr)
}

const ar = new Uint8Array([1,2,4]);
console.log(toCommon(ar));