function isLoop(obj,paths) {
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        if (typeof value === 'object'){
        if (paths.find(path => path.id === value.id)){
            let pathNames = paths.map(path => path.name);
            pathNames.push(key);
            let message = '${pathNames.join('-')}存在循环引用，引用的对象的id是${value.id}';
            throw new Error(message);

        } else {
            let preLength = paths.length;
            paths.push(value);
            isLoop(value,paths);
            paths.length = preLength;
        }
    }})
}

isLoop(tree,[tree]);