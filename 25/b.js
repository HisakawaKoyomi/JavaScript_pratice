import {foo} from './a.js';

export function bar() {
    if(Math.random()) {
        foo();
    }
}