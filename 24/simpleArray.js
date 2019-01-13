class SimpleArray extends Array {
    constructor () {
        super();
    }

    difference(arr) {
        return this.filter(item => !arr.includes(item))
    }

}
