/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const patternArr = pattern.split("");
    const sArr = s.split(" ");
    const patternMap = new Map();
    const sMap = new Map();

    if(patternArr.length !== sArr.length) return false;

    for(let i=0; i<patternArr.length; i++) {
        let patternElement = patternArr[i];
        let sElement = sArr[i];

        if(patternMap.get(patternElement) !== sMap.get(sElement)) return false;

        patternMap.set(patternElement, i);
        sMap.set(sElement, i);
    }

    return true;
};