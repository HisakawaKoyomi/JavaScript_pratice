function jsonPath(json) {
    let path = [];
    function walk(json,tempPath) {
        Object.keys(json).forEach(key => {
            let len = tempPath.length;
            tempPath.push(key);
            if (typeof(json[key]) === 'object' && !Array.isArray(json[key])) {
                walk(json[key],tempPath);
            }else {
                path.push(tempPath.join('->'));
            }
            tempPath.length = len;
        })
    }

    Object.keys(json).forEach(key => {
        if (typeof(json[key]) === 'object'&& !Array.isArray(json[key])){
            walk(json[key],[key]);
        }else {
            path.push(key);
        }
    });
    return path
}

const obj = {
    "name": "John",
    "age": 23,
    "hobbies": ["reading","listening"],
    "family": {
        "brother": {
            "name": "Jim",
            "age": 20,
            "hobbies": ["playing"]
        },
        "sister":["yukino","koyomi"]
    }
};

console.log(jsonPath(obj));