/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const temp = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                temp.push(")");
                break;
            case "[":
                temp.push("]");
                break;
            case "{":
                temp.push("}");
                break;
            default:
                if(s[i] !== temp.pop()) return false;
        }
    }

    return !temp.length;
};