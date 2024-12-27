/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const temp = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        switch (char) {
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
                if(char !== temp.pop()) return false;
        }
    }

    return !temp.length;
};