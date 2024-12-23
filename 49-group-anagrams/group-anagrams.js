/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = new Map();

    for(let i=0; i<strs.length; i++) {
        const sortedElement = strs[i].split("").sort().join("");
        const anagramsElement = anagrams.get(sortedElement);

        if(anagrams.has(sortedElement)) {
            anagrams.set(sortedElement, [...anagramsElement, strs[i]]);
        } else {
            anagrams.set(sortedElement, [strs[i]]);
        }
    }

    return Array.from(anagrams.values());

};