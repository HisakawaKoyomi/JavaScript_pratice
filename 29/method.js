const myObj = {
    _private: 'private',
    public: 'public',
    method: function () {
        console.log(this._private);
    }
};

let proxy = new Proxy(myObj,{
   get: function (obj,prop) {
       if (!prop.startsWith('_')) {
           let value = Reflect.get(obj,prop);
           if (typeof value === 'function') {
               value = value.bind(obj);
           }
           return value
       }
   }
});
/*function privateProps(obj) {
    const  handler = {
        get(obj,prop) {
            if (!prop.startsWith('_')) {
                let value = Reflect.get(obj,prop);
                if (typeof value === 'function') {
                    value = value.bind(obj);
                }
                return value
        }
    }
};
    return new Proxy(obj,handler);
}
const  proxy = privateProps(myObj);*/

console.log(proxy._private);
console.log(proxy.public);
proxy.method();