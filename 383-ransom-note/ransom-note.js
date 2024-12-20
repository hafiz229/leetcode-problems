/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i=0; i<ransomNote.length; i++) {
        const currentIndex = magazine.indexOf(ransomNote[i]);
        if(currentIndex === -1) return false;
        magazine = magazine.substring(0, currentIndex) + magazine.substring(currentIndex + 1);
    }

    return true;
};