/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const splittedPath = path.split("/");
    const stack = [];

    for(let i=0; i<splittedPath.length; i++) {
        if(!splittedPath[i] || splittedPath[i] === ".") {
            continue;
        } else if(splittedPath[i] === "..") {
            stack.pop();
        } else {
            stack.push(splittedPath[i]);
        }
    }

    return "/" + stack.join("/");
};