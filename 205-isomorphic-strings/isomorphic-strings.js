/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sObj = {};
    let tObj = {};

    for(let i=0; i<s.length; i++) {
        if(!(s[i] in sObj)) sObj[s[i]] = i;

        if(!(t[i] in tObj)) tObj[t[i]] = i;

        if(sObj[s[i]] !== tObj[t[i]]) return false;
    }

    return true;

    // 2nd Approach
    // if(s.length !== t.length) return false;

    // const sMap = new Map();
    // const tMap = new Map();

    // for(let i=0; i<s.length; i++) {
    //     const sChar = s[i];
    //     const tChar = t[i];

    //     if(sMap.get(sChar) !== tMap.get(tChar)) return false;

    //     sMap.set(sChar, i);
    //     tMap.set(tChar, i);
    // }

    // return true;

    // 1st Approach
    // if(s.length !== t.length) return false;

    // const sMap = new Map();
    // const tMap = new Map();

    // for(let i=0; i<s.length; i++) {
    //     if(sMap.has(s[i])) {
    //         if(sMap.get(s[i]) !== t[i]) return false;
    //     } else {
    //         sMap.set(s[i], t[i]);
    //     }

    //     if(tMap.has(t[i])) {
    //         if(tMap.get(t[i]) !== s[i]) return false;
    //     } else {
    //         tMap.set(t[i], s[i]);
    //     }
    // }

    // return true;
};