/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const splittedPath = path.split("/");
    const stack = [];

    for(let i=0; i<splittedPath.length; i++) {
        const currentElement = splittedPath[i];
        if(!currentElement || currentElement === ".") {
            continue;
        } else if(currentElement === "..") {
            stack.pop();
        } else {
            stack.push(currentElement);
        }
    }

    return "/" + stack.join("/");
};