/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const sMap = new Map();

    for(let i=0; i<s.length; i++) {
        if(sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
            sMap.set(s[i], 1)
        }
    }

    for(let i=0; i<t.length; i++) {
        if(!sMap.has(t[i]) || (sMap.has(t[i]) && sMap.get(t[i]) === 0)) return false;
        sMap.set(t[i], sMap.get(t[i]) - 1);
    }

    return true;

    // return s.split("").sort().join() === t.split("").sort().join();
    // const arr = new Array(26);
    // for(let i=0; i<s.length; i++) {
    //     arr[s.charCodeAt(i) - 97]++;
    // }

    // for(let i=0; i<t.length; i++) {
    //     if(arr[t.charCodeAt(i) - 97]-- === 0) return false;
    // }

    // return arr.every(element => element === 0);

};